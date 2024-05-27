

export function trimManualVoltage(event:any) {
    const spanElement = event.target;
    spanElement.innerText = spanElement.innerText.replace("\n", "").trim();
  }