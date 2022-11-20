// Summary: "this" refers to the left side of the dot. If there is no left side, it refers to the global window.
// .call and .bind call a function, but manually change the "this" to whatever is passed into call or apply. so someFunc.call(myObj) will make
// "this" in ARROW functions uses the "this" of where the function was created, and you cannot "call" or "bind" a this of arrow functions.
// The arrow function "arrowTest" is created in myObj... so shouldn't "this" be myObj?
// arrowTest gets whatever myObj's "this" is.

function testFunction() {
  console.log("this in testFunction: ", this);
}

testFunction();

const myObj = {
  age: 41,
  increaseAge: function () {
    this.age++;
    console.log("this in increaseAge: ", this);
  },
};

function printAgeFromOutside() {
  console.log("printAgeFromOutside's age: ", this.age);
}

console.log(myObj);
myObj.increaseAge();
console.log(myObj.age);
console.log(myObj);

myObj.getAge = printAgeFromOutside;
myObj.getAge();

myObj.innerObj = { age: 54, printInnerAge: printAgeFromOutside };
myObj.innerObj.printInnerAge();

console.log("------ with new -----");

function Car(make, model) {
  this.make = make;
  this.model = model;
  this.wheels = 4;
}

const c1 = new Car("toyota", "venza");
console.log(c1);

// equivalent to:
// function Car(make, model) {
//  let newObj = { make, model};
//  return newObj;
// }
// const c1 = Car("toyota", "venza");
