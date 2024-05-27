package com.edb.server.rest.model;

import java.util.UUID;

import org.apache.commons.math3.complex.Complex;

public class ProcessedManualData {
        // Outros campos existentes...
    
    private double[] voltageFftReal;
    private double[] voltageFftImaginary;
    private double[] currentFftReal;
    private double[] currentFftImaginary;
    private double rms;
    private double[] voltagePhase;
    private double[] currentPhase;
    private UUID deviceUUID;
    private String deviceName;
    private double powerFactor;
    private double realPower;
    private double apparentPower;
    private double reactivePower;
    private int systemType; 
    private double meanPower;
    
    public ProcessedManualData() {
    }

    public double[] getVoltageFftReal() {
        return voltageFftReal;
    }

    public void setVoltageFftReal(double[] voltageFftReal) {
        this.voltageFftReal = voltageFftReal;
    }


    public double[] getVoltageFftImaginary() {
        return voltageFftImaginary;
    }


    public void setVoltageFftImaginary(double[] voltageFftImaginary) {
        this.voltageFftImaginary = voltageFftImaginary;
    }


    public double[] getCurrentFftReal() {
        return currentFftReal;
    }


    public void setCurrentFftReal(double[] currentFftReal) {
        this.currentFftReal = currentFftReal;
    }


    public double[] getCurrentFftImaginary() {
        return currentFftImaginary;
    }


    public void setCurrentFftImaginary(double[] currentFftImaginary) {
        this.currentFftImaginary = currentFftImaginary;
    }


    public double getRms() {
        return rms;
    }


    public void setRms(double rms) {
        this.rms = rms;
    }


    public double[] getVoltagePhase() {
        return voltagePhase;
    }


    public void setVoltagePhase(double[] voltagePhase) {
        this.voltagePhase = voltagePhase;
    }


    public double[] getCurrentPhase() {
        return currentPhase;
    }


    public void setCurrentPhase(double[] currentPhase) {
        this.currentPhase = currentPhase;
    }


    public UUID getDeviceUUID() {
        return deviceUUID;
    }


    public void setDeviceUUID(UUID deviceUUID) {
        this.deviceUUID = deviceUUID;
    }


    public String getDeviceName() {
        return deviceName;
    }


    public void setDeviceName(String deviceName) {
        this.deviceName = deviceName;
    }


    public double getPowerFactor() {
        return powerFactor;
    }


    public void setPowerFactor(double powerFactor) {
        this.powerFactor = powerFactor;
    }
    
    public double getRealPower() {
        return realPower;
    }

    public void setRealPower(double realPower) {
        this.realPower = realPower;
    }

    public double getApparentPower() {
        return apparentPower;
    }

    public void setApparentPower(double apparentPower) {
        this.apparentPower = apparentPower;
    }

    public void convertCurrentFftToDouble(Complex[] complexArr) {
        currentFftReal = new double[complexArr.length];
        currentFftImaginary = new double[complexArr.length];

        for (int i = 0; i < complexArr.length; i++) {
            currentFftReal[i] = complexArr[i].getReal();
            currentFftImaginary[i] = complexArr[i].getImaginary();
        }
    }

    public void convertVoltageFftToDouble(Complex[] complexArr) {
        voltageFftReal = new double[complexArr.length];
        voltageFftImaginary = new double[complexArr.length];

        for (int i = 0; i < complexArr.length; i++) {
            voltageFftReal[i] = complexArr[i].getReal();
            voltageFftImaginary[i] = complexArr[i].getImaginary();
        }
    }



    public double getReactivePower() {
        return reactivePower;
    }



    public void setReactivePower(double reactivePower) {
        this.reactivePower = reactivePower;
    }

    public int getSystemType() {
        return systemType;
    }

    public void setSystemType(int systemType) {
        this.systemType = systemType;
    }

    public double getMeanPower() {
        return meanPower;
    }

    public void setMeanPower(double meanPower) {
        this.meanPower = meanPower;
    }
    
}
