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

  //
}
