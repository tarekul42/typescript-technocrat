{
  //

  // ternary operator || optional chaining || nullish coalecing operator;
  const age: number = 15;
  if (age >= 18) {
    console.log("adult");
  } else {
    console.log("not adult");
  }

  // ternary operator
  const isAdult = age >= 18 ? "Adult" : "Not Adult";
  console.log(isAdult);

  // nullish coalecing operator
  const isAuthenticated = undefined;

  const result1 = isAuthenticated ?? "Guest";
  const result2 = isAuthenticated ? isAuthenticated : "Guest";
  console.log(result1);

  type User = {
    name: string;
    address: {
      city: string;
      road: string;
      presentAddress: string;
      permanentAddress?: string;
    };

  };

  const user : User = {
    name : "Tarekul",
    address: {
        city: "Comilla",
        road: "Best road",
        presentAddress: "cumilla, best road"
    }
  };

  const permanentAddress = user?.address?.permanentAddress ?? "No permanent address";
  console.log(permanentAddress)

  //
}
