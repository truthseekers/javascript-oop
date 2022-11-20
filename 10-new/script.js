function ZombieNoThis(weapon, speed) {
  console.log("this in ZombieNothis: ", this);
  this.weapon = weapon;
  this.speed = speed;
  this.health = 100;

  // need to manually create the object.
  // return {weapon: weapon} //etc...
}

const zombieNoThis1 = ZombieNoThis("teeth", 4);
console.log(zombieNoThis1); // undefined!

// when using new, it automatically creates an object and automatically returns it.
// When using "new", the "this" is bound to the auto created object, so you can do things like below:
function Zombie(weapon, speed) {
  this.weapon = weapon;
  this.speed = speed;
  this.health = 100;
}

Zombie.prototype.decreaseHealth = function () {
  this.health--;
};
// The ZombieAlternative is the same thing as above.
function ZombieAlternative(weapon, speed) {
  return {
    weapon,
    speed: speed,
  };
}
// alternate way to do the same thing without new.
ZombieAlternative.prototype.decreaseHealth = function () {
  this.health--;
};

const z1 = new Zombie("teeth", 400);
z1.decreaseHealth();
console.log("z1: ", z1); // notice z1 object has the link to the prototype so it can "look up" to function's prototypes.
// z1 looks up to the Zombie function's prototype first.

function BadZombie(weapon, speed) {
  this.weapon = weapon;
  this.speed = speed;
  this.health = 100;
  // this is a separate copy... on every single object. a big waste of space.
  this.decreaseHealth = function () {
    this.health--;
  };
}

const z2 = new BadZombie("fingernails", 200);
z2.decreaseHealth();
console.log(z2);
