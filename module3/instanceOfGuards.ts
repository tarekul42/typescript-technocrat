{
  //
  class Animal {
    name: string;
    species: string;

    constructor(name: string, species: string) {
      this.name = name;
      this.species = species;
    }

    makeSound() {
      console.log("I am making ultrasound.");
    }
  }

  class Dog extends Animal {
    constructor(name: string, species: string) {
      super(name, species);
    }

    makeBark() {
      console.log("I am barking");
    }
  }

  class Cat extends Animal {
    constructor(name: string, species: string) {
      super(name, species);
    }

    makeMeaw() {
      console.log("I am meawing");
    }
  }
  class Rat extends Animal {
    constructor(name: string, species: string) {
      super(name, species);
    }

    makeSound() {
      console.log("I make sound");
    }
  }

  //   we can use function to handle it smartly

  const isDog = (animal: Animal): animal is Dog =>{
    return animal instanceof Dog;
  }


  const isCat = (animal: Animal): animal is Cat =>{
    return animal instanceof Cat;
  }

  const getAnimal = (animal: Animal) => {
    if (isDog(animal)) {
      animal.makeBark();
    } else if (isCat(animal)) {
      animal.makeMeaw();
    } else {
      animal.makeSound();
    } 
  };

  const dog = new Dog("Dog bhai", "dog");
  const cat = new Cat("Cat bhai", "cat");
  const rat = new Rat("Rat bhai", "rat")

  getAnimal(rat);

  //
}
