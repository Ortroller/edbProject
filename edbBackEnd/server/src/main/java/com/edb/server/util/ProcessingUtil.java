package com.edb.server.util;

import org.apache.commons.math3.complex.Complex;
import org.apache.commons.math3.transform.DftNormalization;
import org.apache.commons.math3.transform.FastFourierTransformer;

/**
 * ProcessingUtil
 */
public class ProcessingUtil {

    public Complex[] calculateFft(double[] inputData){
        FastFourierTransformer transformer = new FastFourierTransformer(DftNormalization.STANDARD);
        return transformer.transform(inputData, org.apache.commons.math3.transform.TransformType.FORWARD);
    }

    public double calculateRMS(double[] samples) {
    
        double sum = 0;
        int numSamples = samples.length;
    
        for (int i = 0; i < numSamples; i++) {
            sum +=samples[i] *samples[i];
        }

        double rms = Math.sqrt(sum / numSamples);
        
        return rms;
    }

    @Deprecated
    public double[] calculateVoltageAndCurrentPhase(Complex[] currentFft, Complex[] voltageFft) {
        if (currentFft == null || voltageFft == null || currentFft.length != voltageFft.length) {
            throw new IllegalArgumentException("Arrays de FFT inválidos ou de tamanhos diferentes");
        }

        int length = currentFft.length;
        double[] phase = new double[length];

        for (int i = 0; i < length; i++) {
            double realPartCurrent = currentFft[i].getReal();
            double imaginaryPartCurrent = currentFft[i].getImaginary();
            double realPartVoltage = voltageFft[i].getReal();
            double imaginaryPartVoltage = voltageFft[i].getImaginary();

            // Calcula o ângulo de fase em radianos usando a função atan2
            phase[i] = Math.atan2(imaginaryPartCurrent, realPartCurrent) - Math.atan2(imaginaryPartVoltage, realPartVoltage);
        }

        return phase;
    }

    public double[] calculatePhase(Complex[] fftArr) {
        if (fftArr == null) {
            throw new IllegalArgumentException("Arrays de FFT inválidos ou de tamanhos diferentes");
        }

        int fftArrSize = fftArr.length;
        double[] phase = new double[fftArrSize];

        for (int i = 0; i < fftArrSize; i++) { 
            double real = fftArr[i].getReal();
            double imaginary = fftArr[i].getImaginary();

            phase[i] = Math.atan2(imaginary, real)*(180/Math.PI);
            
        }

        return phase;
    }

    public double calculatePowerFactor(double apparentPower, double realPower) {
        // if (voltagePhase == null || currentPhase == null || voltagePhase.length != currentPhase.length) {
        //     throw new IllegalArgumentException("Arrays de fase de tensão e corrente inválidos ou de tamanhos diferentes");
        // }

        // double sumOfCosines = 0.0;
        // int numberOfSamples = voltagePhase.length;

        // for (int i = 0; i < numberOfSamples; i++) {
        //     double phaseDifference = voltagePhase[i] - currentPhase[i];
        //     sumOfCosines += Math.cos(Math.toRadians(phaseDifference));
        // }

        // double averagePowerFactor = sumOfCosines / numberOfSamples;

        // System.out.println("pwf");
        // System.out.println(averagePowerFactor);
        // return Math.abs(averagePowerFactor);

        return 0;
    }

    public double calculateRealPower(double[] currentSamples, double[] voltageSamples) {
        if (currentSamples.length != voltageSamples.length) {
            throw new IllegalArgumentException("Os vetores de amostras devem ter o mesmo tamanho.");
        }

        double sum = 0;
        int numSamples = currentSamples.length;

        // Calcular a soma do produto das amostras de corrente e tensão
        for (int i = 0; i < numSamples; i++) {
            sum += currentSamples[i] * voltageSamples[i];
        }

        // Calcular a média das amostras para obter a potência real
        double realPower = sum / numSamples;
        return realPower;
    }

    public double calculateApparentPower(double voltageRMS, double currentRMS){
        return voltageRMS * currentRMS;
    }

    public double calculateReactivePowerBy(double apparentPower, double realPower){
        Double returnValue = Math.sqrt( Math.pow(apparentPower, 2) - Math.pow(realPower,2));
        return returnValue.isNaN() ? 0 : returnValue;
    }
    
    /**
     *  0 - resistivo 
     *  1 - indutivo
     *  2 - capacitivo
     * 
     * @param voltageFFT
     * @param currentFFT
     * @return phaseCode
     */
    public int verificatePowerType(Complex[] voltageFFT, Complex[] currentFFT, double fp){

        if (fp >= 0.98) {
            return 0;
        }

        double V_phase = voltageFFT[1].getArgument();
        double I_phase = currentFFT[1].getArgument();
        
        // Passo 4: Calcular a diferença de fase
        double phaseDifference = V_phase - I_phase;

        System.out.println("phaseDiff");
        System.out.println(phaseDifference);

        if (phaseDifference > 0) {
            return 1;
        }else if (phaseDifference < 0){
            return 2;
        }
        return 0;
    }

    public double calculateMeanPower(double voltageRms, double currentRms, double fp){
        // valor eficaz corrente * valor eficaz tensao * fp
        return voltageRms * currentRms * fp;
    }
}