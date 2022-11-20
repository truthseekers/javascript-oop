// Moral of the Story 1: Functions are also objects that you can put properties on, and even functions as properties. *****

function animalFunction() {
  console.log("I am a function and an object.");
}

animalFunction.prop = "heyooo"; // functions are OBJECTS AND FUNCTIONS
console.log(animalFunction); // logging the function only shows the "function" portion
console.log(animalFunction.prop); // even though we have added properties on the function's "object" portion.

console.log(animalFunction.prototype); // has a prototype property
animalFunction(); // can run the function.

// Moral of the story 2: Objects do NOT have a .prototype (unless you make one, which would make things confusing)
// But they DO "look up" to a prototype on the function that created them.

const animal = {
  isAlive: true,
  health: 10,
  increaseHealth: function () {
    console.log("health increased");
  },
};

console.log(animal); // animal "looks up" to a [[prototype]] which is a .prototype on the function that created the "animal" object.
console.log(animal.prototype); // does not have a .prototype logs undefined.  ** .prototype is supposed to go on a function **
// // the "animal" object has a prototype LOOKUP, but does not have a .prototype property.

///// Moral of the story 3: **** .prototype is confusing lol.
// You can create an Object that "looks up" to a function
// But the PROPER way to do it is to make an object "look up" to a function's prototype.

animalFunction.prototype.prop2 = "Bro this is ridiculous";

const animal2 = Object.create(animalFunction); // BAD. Don't base an object off a function.
console.log(animal2); // shows everything, but you can't access everything.
console.log(animal2.prop); // .prop works because .prop is on the animalFunction.
console.log(animal2.prop2); // .prop2 does NOT work because it's on the animalFunction.prototype.

const animal3 = Object.create(animalFunction.prototype); // GOOD. Create an object based off a functions PROTOTYPE.

console.log(animal3);
console.log(animal3.prop); // can't access .prop because it's built into animalFunction.
console.log(animal3.prop2); // CAN access this because animal3 was built off animalFunction.prototype (where .prop2 was made)

// Moral of the Story 3 B: Same thing with functions.

animalFunction.funcOnFunc = function () {
  console.log("I am funcOnFunc");
};

animalFunction.prototype.funcOnPrototype = function () {
  console.log("I am funcOnPrototype");
};

animalFunction.funcOnFunc(); // can call the function,
animalFunction.prototype.funcOnPrototype(); // can call the function.

animal2.funcOnFunc();
// animal3.funcOnFunc(); // Not available

// animal2.funcOnPrototype(); //Not available
animal3.funcOnPrototype();

// Moral of the story 4: Totally fine to create an object from another object. (keep in mind .prototype on functions IS an object.)

const a1 = Object.create(animal);
console.log(a1.isAlive);
a1.increaseHealth();
