{
  //
  //* OOP -> Inheritence

  class Parent {
    name: string;
    age: number;
    address: string;

    constructor(name: string, age: number, address: string) {
      this.name = name;
      this.age = age;
      this.address = address;
    }
    getSleep(numOfHours: number) {
      console.log(`${this.name} will sleep for ${numOfHours} hours.`);
    }
  }

  class Student extends Parent {
    constructor(name: string, age: number, address: string) {
      super(name, age, address);
    }
  }

  const student1 = new Student("Mr. Student", 20, "Bandarban");

  //   console.log(student1);
  student1.getSleep(8);

  //   ----------------------------

  class Teacher {
    name: string;
    age: number;
    address: string;
    designation: string;

    constructor(
      name: string,
      age: number,
      address: string,
      designation: string
    ) {
      this.name = name;
      this.age = age;
      this.address = address;
      this.designation = designation;
    }
    getSleep(numOfHours: number) {
      console.log(`${this.name} will sleep for ${numOfHours} hours.`);
    }
  }

  class Teacher2 extends Parent {
    designation: string;

    constructor(
      name: string,
      age: number,
      address: string,
      designation: string
    ) {
      super(name, age, address);
      this.designation = designation;
    }
  }

  const teacher1 = new Teacher("Mr. Teacher", 50, "Bandarban", "professord");

  console.log(teacher1);
  //   student1.getSleep(8);

  //
}
