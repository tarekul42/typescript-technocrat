{
  //

  type FrontendDeveloper = "fakibajDeveloper" | "juniorDeveloper";
  type FullstackDeveloper = "frontendDeveloper" | "expertDeveloper";

  type Developer = FrontendDeveloper | FullstackDeveloper;

  const newDeveloper: FrontendDeveloper = "juniorDeveloper";

  type User = {
    name: string;
    email?: string;
    gender: "male" | "Female";
    bloodGroup: "O+" | "A+" | "AB";
  };

  const user1: User = {
    name: "Tarekul",
    gender: "male",
    bloodGroup: "O+",
  };

  //
}
