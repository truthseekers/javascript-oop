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
    // this.#privateMethod();
  }

  // #privateMethod() {
  //   console.log("I am private!");
  // }

  static someStaticfunction() {
    console.log("this in someStaticFunction: ", this);
    console.log("this.prototype: ", this.prototype);
  }
}

let h1 = new Human("Bob", "spaghetti", "Pineapple Juice");

function HumanAlternate(name, favoriteFood, favoriteDrink) {
  console.log("this in HumanAlternate: ", this);
  this.name = name;
  this.favoriteFood = favoriteFood;
  this.favoriteDrink = favoriteDrink;
  this.arms = 2;
  this.legs = 2;
}

HumanAlternate.someStaticfunction = function () {
  console.log("this in someStaticFunction: ", this);
  console.log("this.prototype: ", this.prototype);
};

// I don't think we can do a private method with the prototype strategy.
// HumanAlternate.prototype.#privateMethod = function () {
//   console.log("I am private!");
// }

HumanAlternate.prototype.describeMyself = function () {
  console.log(
    `Hello my name is ${this.name} I have ${this.arms} arms and ${this.legs} legs `
  );
  // this.#privateMethod();
};

let h2 = new HumanAlternate("Cindy", "French Fries", "Kool Aid");
