{
  //
  function formatString(input: string, toUpper?: boolean): string {
    if (toUpper === false) {
      return input.toLowerCase();
    } else {
      return input.toUpperCase();
    }
  }
  formatString("this");

  const books = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 5.0 },
    { title: "Book D", rating: 4.0 },
    { title: "Book e", rating: 9.9 },
  ];

  function filterByRating(
    items: { title: string; rating: number }[]
  ): { title: string; rating: number }[] {
    const mappedItems = items.filter(
      (item: { title: string; rating: number }) => item.rating >= 4
    );
    return mappedItems;
  }

  filterByRating(books);

  //   task 3

  // task 4

  class Vehicle {
    constructor(private make: string, private year: number) {}
    getInfo() {
      return `Make: ${this.make}, Year: ${this.year}`;
    }
  }

  class Car extends Vehicle {
    constructor(make: string, year: number, private model: string) {
      super(make, year);
    }
    getModel() {
      return `Model: ${this.model}`;
    }
  }

  const myCar = new Car("Toyota", 2020, "Corolla");
  myCar.getInfo();
  myCar.getModel();

  //   task 5
  function processValue(value: string | number): number {
    if(typeof value === "string"){
        return value.length;
    } else {
        return value*2;
    }
  }

  console.log(processValue("bangladesh"))
  console.log(processValue(10))

  //
}
