package com.edb.server.rest.model;

public class ManualRequestDAO {
    private double[] voltageArr;
    private double[] currentArr;

    public ManualRequestDAO() {
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


    
}   
