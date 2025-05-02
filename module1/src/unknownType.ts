{
  //

  const getSpeedMeterPerSecond = (value: unknown) => {
    if (typeof value === "number") {
      const convertedValue = value / 3.6;
      console.log(`The speed is ${convertedValue} m/s`);
    }

    if (typeof value === "string") {
      const [splittedNumber, unit] = value.split(" ");
      const converInNumber = parseFloat(splittedNumber) / 3.6;
      console.log(converInNumber);
    } else {
      console.log("Wrong Input");
    }
  };
  getSpeedMeterPerSecond(null);

  //
}
