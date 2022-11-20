// Exercise. Do the same thing but use the "new" keyword on each.
const Human = {
  shoes: 6,
  feedCat: function () {
    console.log("Kitten is being fed");
  },
};

const SuperHuman = Object.create(Human);

SuperHuman.speed = 3;
SuperHuman.chewGum = function () {
  console.log("Nom Nom Nom");
};

const SuperDuperHuman = Object.create(SuperHuman);

SuperDuperHuman.speed = 2;
SuperDuperHuman.bakeCookies = function () {
  console.log("cookies have been baked");
};

const sdh1 = Object.create(SuperDuperHuman);

console.log("sdh1: ", sdh1);
console.log("sdh1 shoes: ", sdh1.shoes);

console.log(sdh1.feedCat());
