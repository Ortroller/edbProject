package com.edb.server.rest.service;

import org.apache.commons.math3.complex.Complex;
import org.springframework.stereotype.Service;

import com.edb.server.rest.model.ManualRequestDAO;
import com.edb.server.rest.model.ProcessedManualData;
import com.edb.server.util.ProcessingUtil;

@Service
public class ManualRequestService {
    
    public ProcessedManualData processManualData(ManualRequestDAO unprocessedData){

        ProcessedManualData processedData = new ProcessedManualData();
        ProcessingUtil processer = new ProcessingUtil();

        Complex[] voltageComplex = processer.calculateFft(unprocessedData.getVoltageArr());
        Complex[] currentComplex = processer.calculateFft(unprocessedData.getCurrentArr());

        processedData.convertVoltageFftToDouble(voltageComplex);
        processedData.convertCurrentFftToDouble(currentComplex);
        processedData.setDeviceName("Manual");
        processedData.setDeviceUUID(null);

        double voltageRMS = processer.calculateRMS(unprocessedData.getVoltageArr());
        double currentRMS = processer.calculateRMS(unprocessedData.getCurrentArr());
        double va = processer.calculateApparentPower(voltageRMS, currentRMS); // Potencia Aparente

        double realPower = processer.calculateRealPower(unprocessedData.getCurrentArr(),unprocessedData.getVoltageArr());
        processedData.setPowerFactor(realPower / va);
        processedData.setRms(voltageRMS);
        processedData.setCurrentPhase(
            processer.calculatePhase(currentComplex)
        );
        processedData.setVoltagePhase(
            processer.calculatePhase(voltageComplex)
        );
        processedData.setApparentPower(va);
        processedData.setRealPower(realPower);

        processedData.setReactivePower(processer.calculateReactivePowerBy(va, realPower));

        if(processedData.getReactivePower() != processedData.getReactivePower()){
            processedData.setReactivePower(0);
        }
        processedData.setSystemType(processer.verificatePowerType(voltageComplex, currentComplex, (realPower / va)));
        
        processedData.setMeanPower(
            processer.calculateMeanPower(
                voltageRMS,
                currentRMS, 
                processedData.getPowerFactor()
        ));
        System.out.println(processedData.getReactivePower());
        return processedData;
    }
}
