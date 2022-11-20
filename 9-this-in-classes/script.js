function printThis() {
  console.log("this in printThis: ", this);
}

class Zombie {
  constructor() {
    this.eat = this.eat.bind(this);
    this.favoriteFood = "Brains";
    this.favoriteDrink = "Brains";
  }

  eat() {
    console.log(`${this.favoriteFood.toUpperCase()}!!!`);
  }

  drink() {
    console.log(`Yummy ${this.favoriteDrink}`);
  }
}

class Human {
  constructor(name, favoriteFood, favoriteDrink) {
    console.log(
      "this in Human Constructor refers to instance of class: ",
      this
    );
    this.name = name;
    this.favoriteFood = favoriteFood;
    this.favoriteDrink = favoriteDrink;
    this.arms = 2;
    this.legs = 2;
  }

  describeMyself() {
    console.log(
      `Hello my name is ${this.name} I have ${this.arms} arms and ${this.legs} legs `
    );
  }

  static someStaticfunction() {
    console.log("this in someStaticFunction: ", this);
    console.log("this.prototype: ", this.prototype);
  }
}

let h1 = new Human("Bob", "spaghetti", "Pineapple Juice");

h1.describeMyself();

Human.someStaticfunction();

let z1 = new Zombie();
z1.eat();

h1.eat = z1.eat;
h1.drink = z1.drink;

h1.eat(); // brains
console.log(h1.favoriteFood);
z1.drink();
h1.drink();
