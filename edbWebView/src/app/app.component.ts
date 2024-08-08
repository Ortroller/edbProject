import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ChartModule, ChartStakeModule} from './components/chart.module';
import { getWSserverBase } from "./app.config";
import { Client } from '@stomp/stompjs';
import { Complex, ServerData} from './models/server.data'
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import axios from 'axios';
import { rootApi } from './env';
import { Server } from 'ws';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ChartModule, ChartStakeModule, CommonModule,FormsModule],
  templateUrl: './app.home.html',
  styleUrl: './app.home.css',
})

export class AppComponent implements OnInit{
  title = 'edbView';
  isManualInsert:boolean = false;
  serverProcessedData? : ServerData;
  fftGraphSelect:string = 'current';
  linearData? : any [];
  fftVoltageData : any [] = [];
  fftCurrentData : any[] = [];
  currentPhase : any[] = [];
  voltagePhase : any[] = [];
  meanVoltage : number = 0;

  ngOnInit(): void {
    const wsServer = getWSserverBase();
    console.log("Inicializando WS com: " + wsServer);

    const stompClient = new Client({
      brokerURL: getWSserverBase(),
      debug: (str) => { },
      reconnectDelay: 5000,
      heartbeatIncoming: 4000,
      heartbeatOutgoing: 4000,
    });

    stompClient.onConnect = (frame) => {
      console.log('Conexão STOMP estabelecida: ', frame);
      stompClient.subscribe('/topic/data/processed', this.processServerData);
    };

    stompClient.activate();

  }

  processServerData = (message : any) => {

    if(this.isManualInsert) return;

    this.serverProcessedData = JSON.parse(message.body);

    this._feedPlots();
  }

  _genSeries(arr:any[]){
    let series:any[] = [];

    for(let x=0; x < arr.length; x++){
      series.push({
        x: arr[x],
        y:x
      })
    }
    return series
  }

  _genSeriesFft(arr:any[]){
    let series:any[] = [];

    series.push({
      x: Math.sqrt((arr[0].real**2 + arr[0].imaginary**2)/arr.length),
      y: 0
    })

    for(let x=1; x < (arr.length/2)+1; x++){
      series.push({
        x: (2*Math.sqrt( (arr[x].real**2) + (arr[x].imaginary**2) )/(arr.length)),
        y: x
      })
    }
    return series
  }

  modeSwitch(){
    this.isManualInsert = !this.isManualInsert;
  }

  sendDataToProcess(){
    
    let voltageStrList:string[] | undefined = document.getElementById("manualVoltage")?.innerText.trim().split(",");    
    let currentStrList:string[] | undefined = document.getElementById("manualCurrent")?.innerText.trim().split(",");    
    
    if(voltageStrList?.length != currentStrList?.length){
      alert('Arrays devem ser do mesmo tamanho.');
      return;
    }

    if(voltageStrList == undefined || currentStrList == undefined){
      return;
    }

    let voltage:number[] = [];
    let current:number[] = [];

    voltageStrList.forEach(element => {
      voltage.push(Number.parseFloat(element));
    });

    currentStrList.forEach(element => {
      current.push(Number.parseFloat(element))
    });

    axios.post(rootApi + "/manual", {
      voltageArr:voltage,
      currentArr:current
    }).then(resp => {
      let rdata = resp.data;
      this.serverProcessedData = undefined;
      if(!this.serverProcessedData){
        this.serverProcessedData = this._initializeServerData(rdata);
        this.serverProcessedData.voltageArr = voltage;
        this.serverProcessedData.currentArr = current;

        let voltComplex:Complex[] = [];
        let currComplex:Complex[] = [];

        for(let x = 0; x < rdata.voltageFftReal.length; x++){
          voltComplex.push({
            imaginary: rdata.voltageFftImaginary[x],
            real: rdata.voltageFftReal[x]
          } as Complex);

          currComplex.push({
            imaginary: rdata.currentFftImaginary[x],
            real: rdata.currentFftReal[x]
          } as Complex);
        }

        this.serverProcessedData.currentFftComplex = currComplex;
        this.serverProcessedData.voltageFftComplex = voltComplex;
        console.log(currComplex);
        this._feedPlots();
      }
        })
      .catch(error => console
      .error('Erro ao fazer requisição:', error));

      console.log(this.serverProcessedData);
  }

  _initializeServerData(init:Object):ServerData{ 
    if(init){
      return init as ServerData;
    }
    return {} as ServerData;
  }
  
  _feedPlots():void{
    let serverData:ServerData;
    let linearData : any[] = []
    let fftData : any[] = []

    if(this.serverProcessedData === undefined) return;
    serverData = this.serverProcessedData;

    linearData.push({
      series: this._genSeries(serverData.voltageArr)
    });
    
  
    linearData.push({
      series: this._genSeries(serverData.currentArr)
    });


    this.fftCurrentData.length = 0;
    fftData = this._genSeriesFft(serverData.currentFftComplex);
    this.fftCurrentData = fftData;

    fftData = [];
    fftData = this._genSeriesFft(serverData.voltageFftComplex);
    this.fftVoltageData = fftData;

    this.linearData = linearData;

    this.currentPhase = this._genSeries(serverData.voltagePhase);
    this.voltagePhase = this._genSeries(serverData.currentPhase);
  }

}
