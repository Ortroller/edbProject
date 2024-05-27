package com.edb.server.mqtt.model;

import java.util.UUID;

import org.apache.commons.math3.complex.Complex;

public class ProcessedData {
    
    
    private Complex[] voltageFftComplex;
    private Complex[] currentFftComplex;
    private double rms;
    private double[] voltageArr;
    private double[] currentArr;
    private double[] voltagePhase;
    private double[] currentPhase;
    private double realPower;
    private double apparentPower;
    private UUID deviceUUID;
    private String deviceName;
    private double powerFactor;
    private int systemType; 
    private double reactivePower;
    private double meanPower;

    private transient Boolean isNew;

    public ProcessedData() {
        isNew = false;
    }
    
    public ProcessedData(Complex[] voltageFftComplex, Complex[] currentFftComplex, double[] voltageArr,
            double[] currentArr, UUID deviceUUID, String deviceName) {
        this.voltageFftComplex = voltageFftComplex;
        this.currentFftComplex = currentFftComplex;
        this.voltageArr = voltageArr;
        this.currentArr = currentArr;
        this.deviceUUID = deviceUUID;
        this.deviceName = deviceName;
        this.isNew = false;
    }

    public int getSystemType() {
        return systemType;
    }

    public void setSystemType(int systemType) {
        this.systemType = systemType;
    }

    public double getReactivePower() {
        return reactivePower;
    }

    public void setReactivePower(double reactivePower) {
        this.reactivePower = reactivePower;
    }

    public Complex[] getVoltageFftComplex() {
        return voltageFftComplex;
    }
    public void setVoltageFftComplex(Complex[] voltageFftComplex) {
        this.voltageFftComplex = voltageFftComplex;
    }
    public Complex[] getCurrentFftComplex() {
        return currentFftComplex;
    }
    public void setCurrentFftComplex(Complex[] currentFftComplex) {
        this.currentFftComplex = currentFftComplex;
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

    public double[] getVoltageArr() {
        return voltageArr;
    }

    public void setVoltageArr(double[] voltageArr) {
        this.voltageArr = voltageArr;
    }

    public double[] getCurrentArr() {
        return currentArr;
    }

    public void setCurrentArr(double[] currentArr) {
        this.currentArr = currentArr;
    }

    public Boolean getIsNew() {
        return isNew;
    }

    public void setIsNew(Boolean isNew) {
        this.isNew = isNew;
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

    public double getMeanPower() {
        return meanPower;
    }

    public void setMeanPower(double meanPower) {
        this.meanPower = meanPower;
    }

}
