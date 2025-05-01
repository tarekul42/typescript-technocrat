{
  // type alias in Object
  type Student = {
    name: string;
    age: number;
    gender: string;
    contactNo?: string;
    address: string;
  };

  const student1: Student = {
    name: "Abdullah Sayed",
    age: 20,
    gender: "male",
    contactNo: "016********",
    address: "Agargaon, Dhaka",
  };

  const student2: Student = {
    // this boy is a good student, so, no contactNO: .
    name: "Kaiful",
    age: 20,
    gender: "male",
    address: "kutumbpur",
  };

  // type alias in String
  type UserName = string;
  type IsAdmin = boolean;
  const userName: UserName = "Rifat";
  const isAdmin: IsAdmin = false;

  //   type alias in Function
  type Add = (num1: number, num2: number) => number;
  const add: Add = (num1, num2) => num1 + num2;
}
