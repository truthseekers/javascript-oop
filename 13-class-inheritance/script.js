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
}

const u1 = new User("Sammy", 27);

u1.showCredits();

console.log(u1);
console.log(u1.hasOwnProperty("credits"));
console.log(User.prototype);

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

au1.increaseUserCredits(u1, 4);
u1.showCredits();
au1.showCredits();
console.log("au1: ", au1);
