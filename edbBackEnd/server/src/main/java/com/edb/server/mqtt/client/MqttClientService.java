package com.edb.server.mqtt.client;

import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

import org.eclipse.paho.client.mqttv3.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Service;

import com.edb.server.mqtt.model.ProcessedData;
import com.google.gson.Gson;

@Service
public class MqttClientService{

    private static MqttClientService instance;
    private final ExecutorService executorService = Executors.newSingleThreadExecutor();
    private SimpMessagingTemplate messagingTemplate;
    private static final Logger log = LoggerFactory.getLogger(MqttClientService.class);

    private String broker;
    private String clientId = "server";
    private String dataTopic;
    private String serverComTopic;
    
    private volatile ProcessedData lastDataProcessed;

    private MqttClient mqttClient;
    private volatile boolean stopThread = false;

    @Autowired
    public MqttClientService(
                            @Value("${mqtt.broker.url}") String broker,
                            @Value("${mqtt.client.id}") String clientId,
                            @Value("${mqtt.data.topic}") String dataTopic,
                            @Value("${mqtt.com.topic}") String serverComTopic,
                            SimpMessagingTemplate messagingTemplate){

        if(instance == null){
            this.broker = broker;
            this.clientId = clientId;
            this.dataTopic = dataTopic;
            this.serverComTopic = serverComTopic;
            this.lastDataProcessed = new ProcessedData();
            this.messagingTemplate = messagingTemplate;
            instance = this;
            start();
        }
    }
    
    public void start() {
        executorService.execute(this::mqttConnectionManager);
        log.info("Stopping MQTT services");
        executorService.shutdown();

        if(executorService.isShutdown()){
            log.info("MQTT service terminated.");
        }
    }

    private void mqttConnectionManager() {
        
        log.info("Starting MQTT service");
        try {

            mqttClient = new MqttClient(broker, clientId);
            mqttClient.setCallback(new Callback(lastDataProcessed));

            MqttConnectOptions connectOptions = new MqttConnectOptions();
            connectOptions.setCleanSession(true);

            mqttClient.connect(connectOptions);
            log.info("Connected to MQTT broker: " + broker);

            mqttClient.subscribe(dataTopic);
            log.info("Subscribed to topic: " + dataTopic);

            while (!stopThread) { // ENVIA PARA O TOPICO
                if(lastDataProcessed.getIsNew()){
                    log.info("Received Data from: " + lastDataProcessed.getDeviceName() + " (" + lastDataProcessed.getDeviceUUID() + ")");
                    messagingTemplate.convertAndSend("/topic/data/processed", new Gson().toJson(lastDataProcessed));
                    lastDataProcessed.setIsNew(false); 
                }
            }

            // Encerrando conexoes
            mqttClient.disconnect();
            log.info("Disconnected from MQTT broker");
            mqttClient.close();
        } catch (MqttException e) {
            log.error("MQTT service error.", e);
        }
    }

    public static MqttClientService getInstance() {
        return instance;
    }

}
