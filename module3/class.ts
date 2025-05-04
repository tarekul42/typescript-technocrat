{
  //
  //  ? OOP -> class

  class Animal {
    name: string;
    species: string;
    sound: string;

    constructor(name: string, species: string, sound: string) {
      this.name = name;
      this.species = species;
      this.sound = sound;
    }

    makeSound() {
      console.log(`The ${this.name} sounds ${this.sound}`);
    }
  }

  const dog = new Animal("German Sheperd", "Dog", "Ghew Ghew");
  const cat = new Animal("Siberian Cat", "Cat", "Meaw Meaw");

  // parameter properties
  class Animal2 {
    constructor(
      public name: string,
      public species: string,
      public sound: string
    ) {}

    makeSound() {
      console.log(`The ${this.name} sounds ${this.sound}`);
    }
  }

  const dog2 = new Animal("German Sheperd", "Dog", "Ghew Ghew");
  const cat2 = new Animal("Siberian Cat", "Cat", "Meaw Meaw");

  cat2.makeSound();

  //
}
