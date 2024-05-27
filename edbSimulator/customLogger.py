from datetime import datetime

# Get the current date and time


def printlog(message):
    current_datetime = datetime.now()
    print(
        current_datetime.strftime("%Y-%m-%d %H:%M:%S") + " - " + message.__str__()
    )