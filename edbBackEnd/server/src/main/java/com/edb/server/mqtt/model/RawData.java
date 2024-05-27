package com.edb.server.mqtt.model;

import java.util.UUID;

public class RawData {

    private String deviceName;
    private UUID deviceUUID;
    private Integer size;
    private double[] voltageArr;
    private double[] currentArr;
    
    public RawData(String deviceName, UUID deviceUUID, Integer size, double[] voltageArr, double[] currentArr) {
        this.deviceName = deviceName;
        this.deviceUUID = deviceUUID;
        this.size = size;
        this.voltageArr = voltageArr;
        this.currentArr = currentArr;
    }

    public RawData() {
    }

    public String getDeviceName() {
        return deviceName;
    }

    public void setDeviceName(String deviceName) {
        this.deviceName = deviceName;
    }

    public UUID getDeviceUUID() {
        return deviceUUID;
    }

    public void setDeviceUUID(UUID deviceUUID) {
        this.deviceUUID = deviceUUID;
    }

    public Integer getSize() {
        return size;
    }

    public void setSize(Integer size) {
        this.size = size;
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

    @Override
    public String toString() {
        return "RawData [deviceName=" + deviceName + ", deviceUUID=" + deviceUUID + ", size=" + size + ", voltageArr="
                + voltageArr + ", currentArr=" + currentArr + "]";
    }


}
