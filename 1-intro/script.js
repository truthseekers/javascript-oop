const u1 = {};

u1.name = "Bobby";
u1.age = 14;
u1.incrementAge = function () {
  u1.age += 1;
};

function printInfo() {
  console.log(`My name is ${u1.name} and I am ${u1.age} years old`);
}

function printInfo2() {
  console.log(`My name is ${u2.name} and I am ${u2.age} years old`);
}

u1.printInfo = printInfo;

const testprop = "I am a test prop";

const u2 = {
  name: "Cindy",
  age: 49,
  incrementAge: () => {
    u2.age++;
  },
  printInfo2: printInfo2,
  testprop,
};

console.log("u1: ", u1);
u2.printInfo2();
u2.incrementAge();
u2.incrementAge();
u2.printInfo2();
console.log(u2.testprop);

console.log(u1.name);

// Problems:
// we're making the exact same functions every time. This takes time, code, and uses unnecessary memory
