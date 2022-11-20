const humanFunctions = {
  eat: function () {
    console.log("I am eating. Yum");
  },
  run: function () {
    console.log("4 steps forward");
  },
};

const zombieFunctions = Object.create(humanFunctions); // Object.create always returns an empty object.

zombieFunctions.makeNoise = function () {
  console.log("Uuuaaahhh");
};
zombieFunctions.walk = function () {
  console.log("1 step forward");
};

// run z1.eat() BEFORE overwriting the eat() function to see that this function is retrieved from the humanFunctions object.
// But we can overwrite it with a more specific function to apply specifically to zombies.
zombieFunctions.eat = function () {
  console.log("YUMMY BRAINS!");
};

const z1 = Object.create(zombieFunctions);
const z2 = Object.create(zombieFunctions);
z1.name = "Bob";
console.log(z1.name);
console.log(z1); // see how z1 does not have walk or makeNoise, but we can still call those functions.
z1.makeNoise(); // works because z1 looks up to zombieFunctions which has a makeNoise()
z1.eat(); // originally in humanFunctions, but overwritten in zombieFunctions to be more specific.
z1.run(); // zombies don't have a run(), but humans do, and zombies "look up" all functions on the Human object so they can still call these functions.

console.log(z1.hasOwnProperty("name")); // true because we added .name to z1.
console.log(z1.hasOwnProperty("test")); // false. no .test property is on the z1 object.

const h1 = Object.create(humanFunctions);
h1.run();
h1.makeNoise();
