class User {
  // constructor is like the "new" keyword. It automatically generates and auto returns an object, allowing us to use "this" to easily add properties to our object.
  constructor(name, credits) {
    this.name = name;
    this.credits = credits;
  }

  // methods by default show up on the prototype (because we're using class)
  // equivalent of User.prototype.useCredits = function() ....
  useCredits(credits) {
    this.credits -= credits;
  }
  showCredits() {
    console.log(`${this.name} has ${this.credits} credits`);
  }

  publicMethod() {
    console.log(`I am a public method for ${this.name} `);
  }

  usePrivateMethod() {
    console.log("using private method. ");
    this.#privateMethod();
  }

  #privateMethod() {
    console.log(
      "hmmm.. I can only be used from inside the class. See usePrivateMethod()"
    );
  }

  static staticMethod() {
    console.log("I cannot be called on an instance of the objects I create.");
  }
}

const u1 = new User("Sammy", 27);

// u1.showCredits();

// console.log(u1);
// console.log(u1.hasOwnProperty("credits"));

class AdminUser extends User {
  constructor(adminName, adminCredits, bio) {
    super(adminName, adminCredits);
    this.bio = bio;
  }

  increaseUserCredits(user, credits) {
    user.credits += credits;
  }

  showBio() {
    console.log(`author bio: ${this.bio}`);
  }
}

const au1 = new AdminUser("Lois", 23, "I like Granola bars!");

// au1.increaseUserCredits(u1, 4);
// u1.showCredits();
// au1.showCredits();

u1.publicMethod();
au1.publicMethod();
// u1.privateMethod(); don't work outside the class
// au1.privateMethod(); don't work outside the class.
u1.usePrivateMethod();
au1.usePrivateMethod();
console.log(User.prototype); // Doesn't show privateMethod in the prototype.

// u1.staticMethod(); Does not work.
User.staticMethod();
