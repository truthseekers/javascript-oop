const zombieFunctions = {
  makeNoise: function () {
    console.log("Uuuaaahhh");
  },
  walk: function () {
    console.log("1 step forward");
  },
};

const z1 = Object.create(zombieFunctions);
const z2 = Object.create(zombieFunctions);
z1.name = "Bob";
z2.name = "Cindy";

console.log(z1.name);
console.log(z2); // see how z2 does not have walk or makeNoise, but we can still call those functions.
z2.makeNoise();

// Notice that opening 'prototype' shows the functions, AND another prototype. Every object by default can look up to a default or parent
// .prototype that gives a default set of functions.

console.log(z1.hasOwnProperty("name")); // true because we added .name to z1.
console.log(z1.hasOwnProperty("test")); // false. no .test property is on the z1 object.

const workingObj = {};
workingObj.prop = "la la la";
console.log("workingObj has .prop?", workingObj.hasOwnProperty("prop"));

const brokenObj = Object.create(null);
brokenObj.prop = "what what";
console.log(workingObj);
console.log(brokenObj);
brokenObj.hasOwnProperty("prop");
console.log(brokenObj.prop);
