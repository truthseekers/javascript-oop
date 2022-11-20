// const globalArrow = () => {
//   console.log("this in globalArrow: ", this);
// };

const obj2 = {
  bar() {
    const x = () => {
      console.log("inside const x which is inside bar() from obj2", this);
      // console.log("globalArrow this in const x: ");
      // globalArrow(); // window
      return this;
    }; // function that returns 'this'
    // console.log("globalArrow this in bar(): ");
    // globalArrow(); // window
    return x;
  },
  objName: "obj2",
};

const fn = obj2.bar(); // bar() has already been called because of the (), which creates the "x" arrow function INSIDE of bar which has a "this" of obj2. Then the "x" arrow function is returned from the bar() function and stored in fn. So we can RUN the arrow function by running fn().
fn(); // fn()'s this is "obj2" because the arrow function was CREATED inside the bar when bar()'s "this" was obj2.

const fn2 = obj2.bar; // because there is no () at the end of bar, we're storing the function "bar" in fn2 so we can call it.
// You can think of it like the "bar" function in obj2 is being detached / separated from obj2 and placed in fn2 (in the global scope)
// now to run bar() we call fn2().

fn2(); // shows nothing in console because calling bar() ** by running fn2()** just returns a function.
// fn2() creates the arrow function x, and returns the function. To RUN the arrow function we need another set of (), like fn2()()

fn2()(); // fn2() calls bar(). when bar() runs, it creates the const x arrow function. This time, when the arrow function was created, bar() was "detached" from the object. bar() is being called out here in the global scope, so bar()'s "this" is window, meaning the arrow function that was just created also has a "this" of window.
// the arrow function gets returned out from fn2(), and then the 2nd set of () calls the arrow function that was returned, which prints the log and displays the current "this".
