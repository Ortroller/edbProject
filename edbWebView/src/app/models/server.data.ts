

export interface Complex{
    imaginary:number;
    real:number;
}

export interface ServerData{

    voltageFftComplex: Array<Complex>;
    currentFftComplex: Array<Complex>;
    rms:number;
    voltageArr:Array<number>;
    currentArr:Array<number>;
    voltagePhase:Array<number>;
    currentPhase:Array<number>;
    deviceUUID:string;
    deviceName:string;
    powerFactor:number;
    realPower:number;
    apparentPower:number;
    reactivePower:number;
    systemType:number;
    meanPower:number;
    
}

/*

310.10,
243.30,
139.46,
14.39,
-112.87,
-222.94,
-299.08,
-329.69,
-310.10,
-243.30,
-139.46,
-14.39,
112.87,
222.94,
299.08,
329.69

28.58,
32.72,
31.88,
26.18,
16.50,
4.31,
-8.54,
-20.09,
-28.58,
-32.72,
-31.88,
-26.18,
-16.50,
-4.31,
8.54,
20.09

*/
