{
  //
  /*
    Task 3: Object Types, Type Alias, & Literal Types
    Objective: Define a structured Person object using Type Aliases.

    Instructions:

        Define a Person type alias with properties for Name, Address, 
        Hair and Eye Color, Income and Expense, Hobbies, Family Members, 
        Job, Skills, Marital Status, and Friends.
    */

  type HairColor = "Black" | "Blonde" | "Brown";
  type EyeColor = "Blue" | "Green" | "Brown" | "Black Brown";
  type MaritalStatus = "married" | "unmarried";

  interface Person {
    name: string;
    address: string;
    hairColor: HairColor;
    eyeColor: EyeColor;
    income: number;
    expense: number;
    hobbies: string[];
    familyMembers: string[];
    job: string;
    skills: string[];
    maritalStatus: MaritalStatus;
    friends: string[];
  }

  const person: Person = {
    name: "Mr. Person",
    address: "Where the person lives",
    hairColor: "Black",
    eyeColor: "Black Brown",
    income: 10,
    expense: 0.1,
    hobbies: ["coding", "writing", "listening"],
    familyMembers: ["IDE", "Programming language", "Devices"],
    job: "Building easy life",
    skills: [
      "making lazy programmers life hell",
      "catch the fraud",
      "taking 3rd dimension from programmers life",
    ],
    maritalStatus: "unmarried",
    friends: ["person1", "person2", "person3", "person4"],
  };

  console.log(person);

  //
}
