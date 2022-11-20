class LevelOne {
  constructor() {
    this.propOne = "prop one";
  }
  lvlOneFunc() {
    console.log("lvlOne calling propOne: ", this.propOne);
  }
}

class LevelTwo extends LevelOne {
  constructor() {
    super();
    this.propTwo = "prop two";
  }
  lvlTwoFunc() {
    console.log(
      "lvlTwo calling propTwo AND propOne: ",
      this.propOne,
      this.propTwo
    );
  }
}

class LevelThree extends LevelTwo {
  constructor() {
    super();
    this.propThree = "prop three";
  }
  lvlThreeFunc() {
    console.log(
      "lvlThree calling propOne, two, and three: ",
      this.propOne,
      this.propTwo,
      this.propThree
    );
  }
}

LevelTwo.prototype.goodInjection = function () {
  console.log("I am a good injection. Do it this way.");
};

LevelTwo.badInjection = function () {
  console.log("I am bad.");
};

const l3 = new LevelThree();
l3.lvlThreeFunc();
l3.goodInjection();
l3.badInjection();
