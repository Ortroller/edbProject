import numpy as np
import random

def generate_wave(gen_step: float,
                  frequency:float = 60,
                  amplitude:float = 220,
                  show_statistics: bool = False):
    
    duration = 1/frequency
    time = np.arange(0, duration, gen_step)  # using 1/1000.0 as the time step for smooth plotting
    tension = amplitude * np.sin(2 * np.pi * frequency * time)
    curr_random_val = (random.random() * 95) + 5
    current = curr_random_val * np.sin(2 * np.pi * frequency * time)

    if show_statistics:
        print("Statistics:\n" +
          f'time_arr size = {len(time)}\n' + 
          f'signal size = {len(tension)}\n' + 
          f'frequency = {frequency}')
        
    return time, tension, current

def generate_displaced_wave(gen_step: float,
                  frequency:float = 60,
                  amplitude:float = 220,
                  show_statistics: bool = False,
                  delay:bool = False):
    
    if delay:
        phase_shift = np.pi / 2
    else:
        phase_shift = -np.pi / 2
    
    duration = 1/frequency
    time = np.arange(0, duration, gen_step)  # using 1/1000.0 as the time step for smooth plotting
    tension = amplitude * np.sin(2 * np.pi * frequency * time)
    curr_random_val = (random.random() * 95) + 5

    current = curr_random_val * np.sin(2 * np.pi * frequency * time + phase_shift)

    if show_statistics:
        print(f"Displaced statistics:\n" +
          f'Is delayed = {delay.__str__()}\n' +
          f'Current amplitude = {curr_random_val}\n' +
          f'time_arr size = {len(time)}\n' + 
          f'signal size = {len(tension)}\n' + 
          f'frequency = {frequency}')
        
    return time, tension, current

