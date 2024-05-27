package com.edb.server.mqtt.broker;
import io.moquette.broker.Server;

public class MoquetteBroker implements Runnable{
    
    @Override
    public void run() {
        // Create an instance of the Moquette broker
        Server mqttBroker = new Server();
        // Start the broker
        try {
            mqttBroker.startServer();
            System.out.println("Moquette MQTT broker started. Press Ctrl+C to stop.");
        } catch (Exception e) {
            System.err.println("Error starting the Moquette broker: " + e.getMessage());
        }

        // Add shutdown hook to stop the broker gracefully
        Runtime.getRuntime().addShutdownHook(new Thread(() -> {
            System.out.println("Stopping Moquette MQTT broker...");
            mqttBroker.stopServer();
            System.out.println("Moquette MQTT broker stopped.");
        }));
    }

}
