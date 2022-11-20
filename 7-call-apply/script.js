const human = {
  age: 15,
  name: "Jordan",
  incrementAge: function () {
    this.age++;
  },
  brokenArrowIncrement: () => {
    // sorry. In the video I had the commented line, but realized the name was wrong so I changed the console log text
    // console.log("this in arrowIncrementAge: ", this);
    console.log("this in brokenArrowIncrement: ", this);
    this.age++;
  },
  hasArrowIncrementAge: function () {
    // what is the this of where the arrow function was created? Look at this of hasArrowIncrementAge. Normally it would be human, but because of .call
    // it's changed to animal1.
    const addOne = () => {
      this.age++;
    };
    addOne();
  },
  weight: 200,
};

const animal1 = { age: 4, name: "Rex", weight: 600 };

function whatIsThis() {
  console.log("this in whatIsThis: ", this);
  console.log("this.age", this.age);
}

var age = 2000;

whatIsThis(); // age var gets added to the global Window object, and so do the functions we create, but the human and animal objects
// are not placed on the global window object. Not sure why that is, but I don't think it's necessary to investigate.

whatIsThis.call(human); // by using "call", we're able to force the "this" to be set to whatever you pass into "call"
// because we passed "human" into "call", we're running the whatIsThis function but "this" is set to the human object.

human.incrementAge.call(animal1); // allows animal1 to "borrow" the incrementAge() function from human. by calling incrementAge with a "this" of animal1
human.incrementAge.apply(animal1);
console.log("animal1: ", animal1);

// we're not actually calling an arrow function when using call. we're calling a regular function that has an arrow inside. So .call is able to set animal1 as the "this".
human.hasArrowIncrementAge.call(animal1);

console.log("animal1 after hasArrowIncrementAge: ", animal1);

human.brokenArrowIncrement.call(animal1); // this time we're actually using .call on an arrow function. .call, .bind, .apply don't work on arrow functions.

console.log("animal1 after brokenArrowIncrement: ", animal1);

function add(num1, num2) {
  console.log("this in add: ", this);
  console.log(this.age + this.weight + num1 + num2);
}

add(10, 20); // num1 = 10, num2 = 20, this.age = 2000, this.weight = undefined
add.call(human, 10, 20); // pass in 10 and 20 as parameters to add(), while setting "human" to "this"
add.apply(human, [10, 20]);
