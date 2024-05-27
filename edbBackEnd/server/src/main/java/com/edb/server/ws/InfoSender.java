package com.edb.server.ws;

import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

@Component
public class InfoSender {

    private final SimpMessagingTemplate messagingTemplate;

    // Constructor injection
    public InfoSender(SimpMessagingTemplate messagingTemplate) {
        this.messagingTemplate = messagingTemplate;
    }

    @Scheduled(fixedRate = 1000) // Send a message every 5 seconds
    public void sendPeriodicMessage() {
        String message = "This is a periodic message!";
        messagingTemplate.convertAndSend("/topic/endata", message);
    }
}
