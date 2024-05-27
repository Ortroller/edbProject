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
STEP16 = 1/950

# Define callbacks for MQTT events
def on_connect(client, userdata, flags, rc):
    print(f"Connected with result code {rc}")

    client.publish("device/connect", device_id.__str__())
    client.subscribe(SERVER_COM_TOPIC)


def on_message(client, userdata, msg):
    # topic: mode 
    printlog("Received message. Topic: " + msg.topic)
    if msg.topic == 'server/com':
        pass
    print(f"Received message: {msg.payload.decode()} on topic {msg.topic}")


def generate_data():
    #time, volt, curr = generate_displaced_wave(delay=True,gen_step=STEP16)
    time, volt, curr = generate_displaced_wave(delay=False,gen_step=STEP16)
    #time, volt, curr = generate_wave(gen_step=STEP16)
    return{
        "size": len(volt),
        "deviceUUID" : device_id.__str__(),
        "deviceName" : DEVICE_NAME,
        "voltageArr" : volt.tolist(),
        "currentArr" : curr.tolist()
    }


def mainTread():
    client = mqttcli.Client()

    client.on_connect = on_connect
    client.on_message = on_message

    # Broker
    client.connect("localhost", 1883, 60)
    client.loop_start()

    # main loop
    try:
        while True:
            time.sleep(5)
            printlog("Sending data")
            client.publish(
                SERVER_DATA_INPUT_TOPIC,
                json.dumps(generate_data()))
            
    except KeyboardInterrupt:
        client.disconnect()
        client.loop_stop()


if __name__ == "__main__":
    printlog("Device uuid code: " + device_id.__str__())
    mainTread()



