{
  //
  // generic constrains with keyof operator

  type Vehicle = {
    car: string;
    bike: string;
    yacht: string;
  };

  type Owner1 = "car" | "bike" | "yacht"; //manually

  type Owner2 = keyof Vehicle;

  const getPropertyValue = <X, Y extends keyof X>(obj: X, key: Y) => {
    return obj[key];
  };

  const user = {
    name: "Forashi",
    age: 83,
    address: "Nigeria",
  };

  const car = {
    model: "BMW i8",
    year: 2000,
  };

  const result1 = getPropertyValue(car, "model");
  //
}
