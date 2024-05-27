from simulationEngine import *
import matplotlib.pyplot as plt
import numpy as np

if __name__ == "__main__":

    # time, volt, curr = generate_wave(gen_step=1/950
    #                            ,show_statistics=True)

    # print("time_arr: " + time.__str__() + '\n' + "sig array: " + volt.__str__())

    # plt.figure(figsize=(8, 4))
    # plt.plot(time, volt)
    # plt.plot(time, curr)
    # plt.title('Sinusoidal Wave')
    # plt.xlabel('Time (s)')
    # plt.ylabel('Amplitude')
    # plt.grid(True)
    # plt.show()


    # time, volt, curr = generate_displaced_wave(gen_step=1/1200
    #                        ,show_statistics=True)
    
    # plt.figure(figsize=(8, 4))
    # plt.plot(time, volt)
    # plt.plot(time, curr)
    # plt.title('Sinusoidal Wave')
    # plt.xlabel('Time (s)')
    # plt.ylabel('Amplitude')
    # plt.grid(True)
    # plt.show()

    # time, volt, curr = generate_displaced_wave(gen_step=1/1200
    #                        ,show_statistics=True, delay=True)
    
    # plt.figure(figsize=(8, 4))
    # plt.plot(time, volt)
    # plt.plot(time, curr)
    # plt.title('Sinusoidal Wave')
    # plt.xlabel('Time (s)')
    # plt.ylabel('Amplitude')
    # plt.grid(True)
    # plt.show()


    # Dados fornecidos
    voltageArr = np.array([0,85.02981724433948,156.84425862410734,204.28188846773554,219.9699270983432,201.47013186411266,151.65775000608457,78.27464632295367,-7.273941249807702,-91.69200930896375,-161.85926034808887,-206.87026582555546,-219.72939321262706,-198.43807062925103,-146.30540586504668,-71.43388322503043])
    currentArr = np.array([-43.443187409820354,-40.067206671639816,-30.463961037809494,-16.125991650764007,0.7182872611085214,17.450929614866318,31.471339936136754,40.60045918215279,43.41943516601726,39.49014125889221,29.423270245354747,14.783420151550995,-2.154076346751314,-18.756785243646732,-32.44430538630142,-41.08931568664003])

    # Calcula a Potência Real
    real_power = np.mean(voltageArr * currentArr)

    # Calcula as RMS de tensão e corrente
    voltage_rms = np.sqrt(np.mean(voltageArr**2))
    current_rms = np.sqrt(np.mean(currentArr**2))

    # Calcula a Potência Aparente
    apparent_power = voltage_rms * current_rms

    # Calcula o Fator de Potência
    power_factor = real_power / apparent_power

    print("Fator de Potência:", power_factor)
    print("Potência Real:", real_power)
    print("Potência Aparente:", apparent_power)