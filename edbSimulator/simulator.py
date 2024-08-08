import paho.mqtt.client as mqttcli
from customLogger import printlog
from simulationEngine import *
import uuid
import time
import json

device_id = uuid.uuid4()

SERVER_DATA_INPUT_TOPIC = "data/raw"
SERVER_COM_TOPIC = "server/com"
DEVICE_NAME = "simulator"
STEP16 = 1/960

# Define callbacks for MQTT events
def on_connect(client, userdata, flags, rc):
    print(f"Conectado ao servidor com resultado {rc}.")

    client.publish("device/connect", device_id.__str__())
    client.subscribe(SERVER_COM_TOPIC)


def on_message(client, userdata, msg):
    # topic: mode 
    printlog("Mensagem recebida. Tópico: " + msg.topic)
    if msg.topic == 'server/com':
        pass
    print(f"Mensagem recebida: {msg.payload.decode()} | tópico: {msg.topic}")


def generate_data(choice:int):
    time = None
    volt = None
    curr = None
    if choice == 0 : time, volt, curr = generate_wave(gen_step=STEP16)
    if choice == 1 : time, volt, curr = generate_displaced_wave(delay=True,gen_step=STEP16)
    if choice == 2 : time, volt, curr = generate_displaced_wave(delay=False,gen_step=STEP16)
    
    simulatad_values = {
        "size": len(volt),
        "deviceUUID" : device_id.__str__(),
        "deviceName" : DEVICE_NAME,
        "voltageArr" : volt.tolist(),
        "currentArr" : curr.tolist()
    }

    printlog(simulatad_values)
    return simulatad_values

def display_options():
    print("Bem-vindo ao simulador\nPor favor escolha uma característica para simulação:" + 
          "\n0 - Resistivo\n1 - Capacitivo\n2 - Indutivo")
    
    simulation_opt = int(input())

    if(simulation_opt < 0 or simulation_opt > 2):
        print("Inválido, usando valor padrão (RESISTIVO).")
        simulation_opt = 0
    
    printlog(f"Opção escolhida: {simulation_opt}.")
    return simulation_opt

def mainThread():
    client = mqttcli.Client()

    simulation_choice = display_options()
    printlog("Código do dispositivo simulado: " + device_id.__str__())

    client.on_connect = on_connect
    client.on_message = on_message
    
    # Broker
    client.connect("localhost", 1883, 60)
    client.loop_start()

    # main loop
    try:
        while True:
            time.sleep(1)
            printlog("Enviando dados")
            client.publish(
                SERVER_DATA_INPUT_TOPIC,
                json.dumps(generate_data(simulation_choice)))
            
    except KeyboardInterrupt:
        client.disconnect()
        client.loop_stop()


if __name__ == "__main__":
    mainThread()



