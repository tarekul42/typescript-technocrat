{
  // Object Destructuring
  const user = {
    id: 394,
    name: {
      firstName: "Abul",
      middleName: "Kamal",
      lastName: "Babul",
    },
    contactNo: "01298462830",
    address: "Komolachur",
  };

  const {
    contactNo,
    name: { middleName },
  } = user;

//   Array Destructuring
const myFriends = ["Muna", "Roni", "Tarek", "Fahim", "Sayed"];
const [, , , highSchoolsFirstFriend, ...rest] = myFriends;
}
