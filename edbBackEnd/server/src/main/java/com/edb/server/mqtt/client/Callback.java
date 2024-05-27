package com.edb.server.mqtt.client;

import org.eclipse.paho.client.mqttv3.IMqttDeliveryToken;
import org.eclipse.paho.client.mqttv3.MqttCallback;
import org.eclipse.paho.client.mqttv3.MqttMessage;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.apache.commons.math3.complex.Complex;
import org.apache.commons.math3.transform.DftNormalization;
import org.apache.commons.math3.transform.FastFourierTransformer;

import com.edb.server.mqtt.model.ProcessedData;
import com.edb.server.mqtt.model.RawData;
import com.edb.server.util.ProcessingUtil;
import com.google.gson.Gson;

public class Callback implements MqttCallback {

    private static final Logger log = LoggerFactory.getLogger(Callback.class);

    private static final Gson serializer =  new Gson();

    private ProcessedData lastProcessedData;

    public Callback(ProcessedData lastProcessedData) {
        super();
        this.lastProcessedData = lastProcessedData;
    }

    @Override
    public void messageArrived(String topic, MqttMessage message) throws Exception {
        ProcessingUtil processer = new ProcessingUtil();
        try{

            if(topic.trim().equals("data/raw") ){

                RawData nodeData = serializer.fromJson(
                    new String(message.getPayload()),
                    RawData.class
                );

                /* Atualizando objeto compartilhado */
                this.lastProcessedData.setCurrentFftComplex(processer.calculateFft(nodeData.getCurrentArr()));
                this.lastProcessedData.setVoltageFftComplex(processer.calculateFft(nodeData.getVoltageArr()));
                this.lastProcessedData.setDeviceName(nodeData.getDeviceName());
                this.lastProcessedData.setRms(processer.calculateRMS(nodeData.getVoltageArr()));
                this.lastProcessedData.setDeviceUUID(nodeData.getDeviceUUID());
                this.lastProcessedData.setVoltageArr(nodeData.getVoltageArr());
                this.lastProcessedData.setCurrentArr(nodeData.getCurrentArr());
                this.lastProcessedData.setIsNew(true);

                this.lastProcessedData.setCurrentPhase(
                    processer.calculatePhase(this.lastProcessedData.getCurrentFftComplex())
                );
                this.lastProcessedData.setVoltagePhase(
                    processer.calculatePhase(this.lastProcessedData.getVoltageFftComplex())
                );

                this.lastProcessedData.setApparentPower(processer.calculateApparentPower(
                    processer.calculateRMS(nodeData.getVoltageArr()),
                    processer.calculateRMS(nodeData.getCurrentArr())));

                this.lastProcessedData.setRealPower(
                    processer.calculateRealPower(
                        nodeData.getCurrentArr(),
                        nodeData.getVoltageArr())
                    );

                                        
                this.lastProcessedData.setPowerFactor(
                    this.lastProcessedData.getRealPower()/this.lastProcessedData.getApparentPower()
                );

                this.lastProcessedData.setReactivePower(
                    processer.calculateReactivePowerBy(
                        this.lastProcessedData.getApparentPower(),
                        this.lastProcessedData.getRealPower())
                );
                
                this.lastProcessedData.setSystemType(
                    processer.verificatePowerType(
                        this.lastProcessedData.getVoltageFftComplex(),
                        this.lastProcessedData.getCurrentFftComplex(),
                        this.lastProcessedData.getPowerFactor()
                    )
                );

                this.lastProcessedData.setMeanPower(
                    processer.calculateMeanPower(
                        this.lastProcessedData.getRms(),
                        processer.calculateRMS(nodeData.getCurrentArr()), 
                        this.lastProcessedData.getPowerFactor()
                ));
            }
        }catch(Exception ex){
            log.error("Falha ao tratar mensagem. ", ex);
        }
    }

    @Override
    public void deliveryComplete(IMqttDeliveryToken token) {
    }

    @Override
    public void connectionLost(Throwable exThrowable) {
    }

}
