package com.edb.server.rest.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.edb.server.rest.model.ManualRequestDAO;
import com.edb.server.rest.model.ProcessedManualData;
import com.edb.server.rest.service.ManualRequestService;

/**
 * ManualRequestController
 */
@RestController
@RequestMapping("/manual")
public class ManualRequestController {

    @Autowired
    ManualRequestService service;

    
    public ManualRequestController(ManualRequestService service) {
        this.service = service;
    }


    @PostMapping
    public ResponseEntity<ProcessedManualData> processManualGet(@RequestBody ManualRequestDAO data){
        if ((data.getCurrentArr().length != data.getVoltageArr().length) || (data.getVoltageArr().length == 0)) {
            return ResponseEntity.status(400).body(null);
        }

        ProcessedManualData outData = null;

        try{
            outData = service.processManualData(data);
        }catch(Exception ex){
            System.out.println(ex.getLocalizedMessage());
            return ResponseEntity.status(500).body(null);
        }
        return ResponseEntity.status(200).body(outData);
    }
}