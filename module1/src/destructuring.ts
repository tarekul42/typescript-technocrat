{
  // spread operator
  // rest operator
  // destructuring

  // learning spread operator

  const bros1: string[] = ["Sayed", "Fahim", "Limon"];
  const bros2: string[] = ["Roni", "Tarek", "Emon"];

  bros1.push(...bros2);

  const mentors1 = {
    typescript: "Mezba",
    redux: "Mir",
    dbms: "Mizan",
  };

  const mentors2 = {
    prisma: "Firoz",
    next: "Tonmoy",
    cloud: "Nahid",
  };

  const mentorsList = {
    ...mentors1,
    ...mentors2,
  };
}
