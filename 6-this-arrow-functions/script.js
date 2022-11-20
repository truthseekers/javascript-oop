// Summary: "this" refers to the left side of the dot. If there is no left side, it refers to the global window.
// .call and .bind call a function, but manually change the "this" to whatever is passed into call or apply. so someFunc.call(myObj) will make
// "this" in ARROW functions uses the "this" of where the function was created, and you cannot "call" or "bind" a this of arrow functions.
// arrowTest gets whatever myObj's "this" is.

const globalArrow = () => {
  console.log("globalArrow this: ", this);
};

const myObj = {
  age: 41,
  increaseAge: function () {
    this.age++;
    console.log("this in increaseAge: ", this);
  },
  arrowTest: () => {
    console.log("this in arrow function: ", this); // this is window because the function gets it's "this" from myObj. myObj's "this" is Window.
    // but the properties inside myObj have a "this" of myObj.
    // For arrow functions, ask yourself 'What is the "this" of the "thing" where the arrow function was created in?'
    // so in this case, what is the "this" of the myObj?
  },
  arrowTest2: function () {
    console.log(
      "arrowTest2's this is myObj. so an arrow function in here should have its this be myObj."
    );
    const thisInArrowTest2 = () => {
      console.log("this in arrowTest2: ", this); // this function was created in arrowTest2, and arrowTest2 has a "this" of myObj.
    };
    thisInArrowTest2(); // allows us to set "this" without having a "left hand side of the dot"
    console.log("using globalArrow() in arrowTest2: ");
    globalArrow(); // globalArrow was created in global scope. What is the Global scope's "this" ? It's Window.
  },
  arrowTest3: globalArrow, // this is window because the arrow function that logs this was created in the global scope, and the global scope's "this" is window.
};

console.log(myObj.age);
myObj.increaseAge();
console.log(myObj.age);

console.log("running myObj.arrowTest: ");
myObj.arrowTest();
console.log("running myObj.arrowTest2: ");
myObj.arrowTest2();
console.log("running arrowTest3: ");
myObj.arrowTest3();

console.log("-----------");

function CarModel(make, model) {
  this.make = make;
  this.model = model;
}

const c1 = new CarModel("Toyota", "Venza");

CarModel.prototype.makeNoise = function () {
  const vroom = () => {
    console.log(`Vroom says the ${this.make} ${this.model}`);
  };
  vroom(); // "vroom" gets its "this" from  makeNoise (because vroom function was created INSIDE makeNoise *and its an arrow function*). makeNoise is called on an object. ex. myObj.makeNoise(). So makeNoise's "this" is the object.
  // so vroom()'s "this" is the carmodel object.

  function vroom2() {
    console.log(`Vroom2 says the ${this.make} ${this.model}`);
  }
  vroom2(); // Doesn't work because vroom() has nothing on the left side of the dot. There is no dot.. like myObj.vroom()
  // if we converted vroom2 to an arrow function it would work. But it's not an arrow function, so it needs to be called on an object.
  //ex. myObj.vroom2()
};

c1.makeNoise();
