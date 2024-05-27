import { Component, Input, OnChanges, OnInit, SimpleChanges } from "@angular/core";
import { Color, ScaleType } from "@swimlane/ngx-charts";
import { CanvasJSAngularChartsModule, CanvasJS } from '@canvasjs/angular-charts';
import {v4 as uuidv4, v4} from 'uuid';


@Component({
    selector: 'chart-component-voltage',
    template: `<div style="height: 100%; width: 100%;" id="voltage-current-graph"> </div>`
})
export class ChartComponentexport implements OnInit{

  @Input() inputData?: any[];
  @Input() plotName?: String;
  @Input() yAxisText?: String;
  @Input() xAxisText?: String;

  chart?:any
  tensionDataPoints:any[] = []
  currentDataPoints:any[] = []  
  
  ngOnInit(): void {
    this.chart = new CanvasJS.Chart("voltage-current-graph", {
			title : {
				text : this.plotName,
        fontColor: 'white'
			},
      backgroundColor: "black",
			data : [{
					type : "spline",
          name : "Tensão",
          showInLegend: true,
          markerSize : 0,
					dataPoints : this.tensionDataPoints
				},
        {
					type : "spline",
          name : "Corrente",
          showInLegend: true,
          markerSize : 0,
					dataPoints : this.currentDataPoints
				}
			]
		});

    if(this.xAxisText){
      this.chart.options.axisX = {
        title: this.xAxisText,
        labelFontColor: 'white',
        titleFontColor: 'white'
      }
    }

    if(this.yAxisText){
      this.chart.options.axisY = {
        title: this.yAxisText,
        labelFontColor: 'white',
        titleFontColor: 'white'
      }
    }


    // console.log(this.chart.options.data);
    this.chart.render();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(this.inputData){

      // console.log(this.inputData);

      this._flushAndPopulateArray(
        this.inputData[0].series,
        this.tensionDataPoints
      )

      this._flushAndPopulateArray(
        this.inputData[1].series,
        this.currentDataPoints
      )
      
    }

    if(this.chart != undefined){
      // console.log(this.chart.options.data);
      this.chart.render();
    }
  }

  _flushAndPopulateArray(inArr:any[], out:any[]) {
    out.length = 0
    let index = 0; 

    for(let obj of inArr){
      
      out.push({
        y: obj.x,
        x:index
      });
      index++;
    }
  }
}

// <canvasjs-chart *ngIf="inputData" [options]="chartOptions" [styles]="{width: '100%', height:'360px'}"></canvasjs-chart>

@Component({
  selector: 'chart-component-stake',
  template: `<div style="height: 100%; width: 100%;" id="fft-graph"> </div>`
})
export class ChartStakeComponentexport implements OnChanges, OnInit{
  @Input() inputData?: any[];
  @Input() plotName?: String;
  @Input() yAxisText?: String;
  @Input() xAxisText?: String;

  chart?:any
  dataPoints:any[] = []
  
  ngOnInit(): void {
    this.chart = new CanvasJS.Chart("fft-graph", {
			title : {
				text : this.plotName,
        fontColor: 'white'
			},
      backgroundColor: "black",
			data : [{
        type: "scatter",  // Use scatter for the points
        markerType: "circle",  // Marker shape, can be circle, square, etc.
        markerSize: 8,  // Size of each marker
        markerColor: "red",  // Color of markers
				dataPoints : this.dataPoints
				},
        {
          type: "line",  // Linha para conectar ao zero
          markerType: "none",  // Sem marcadores na linha
          showInLegend: false,  // Não mostrar na legenda
          dataPoints: []
        }]
		});

    if(this.xAxisText){
      this.chart.options.axisX = {
        title: this.xAxisText,
        labelFontColor: 'white',
        titleFontColor: 'white'
      }
    }

    if(this.yAxisText){
      this.chart.options.axisY = {
        title: this.yAxisText,
        labelFontColor: 'white',
        titleFontColor: 'white'
      }
    }
    this._createLines(); 
    this.chart.render();
  }

  ngOnChanges(changes: SimpleChanges): void {

    this._createLines();

    if(this.chart != undefined){
      this.chart.render();
    }
  }

  _createLines(){
    let chartOptionsData = null;

    if(this.chart){
      chartOptionsData = this.chart.options.data;
      chartOptionsData.length = 1;
    }

    if(this.inputData){

      this.dataPoints.length = 0
      let index = 0; 

      for(let obj of this.inputData){

        this.dataPoints.push({
          y: obj.x,
          x:index
        });
      
        if (chartOptionsData){
          chartOptionsData.push({
            type: "line",
            markerType: "none",
            showInLegend: false,
            dataPoints: [{ y: 0, x: index }, { y: obj.x, x: index }],
            lineColor: "gray",
            lineThickness: 1
          });
        }
        index++;
      }
    }
  }

}