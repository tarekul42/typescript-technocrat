{
  // Normal function
  // Arrow functions

  function add(num1: number, num2: number): number {
    return num1 + num2;
  }

  add(5, 9);

  const addNumber = (numb1: number, numb2: number): number => numb1 + numb2;

  addNumber(6, 7);

  console.log(add, addNumber);

  // Object --> function --> method

  const topUser = {
    name: "Tarekul Islam Rifat",
    balance: 90,
    addBanalce(balance: number): string {
      return `My new balance is ${this.balance + balance}`;
    },
  };

  const arr: number[] = [1, 3, 13];

  const newArray: number[] = arr.map((elem: number): number => {
    return elem * elem;
  });
}
