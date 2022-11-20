function printThis() {
  console.log("this from printThis: ", this);
}

const printThisBound = printThis.bind({ objName: "obj1", prop: "yea hi." });

console.log("printThisBound is: ", printThisBound); // printThisBound is a function that has its "this" bound to the object passed into .bind().

printThisBound(); // this runs "printThis" with "this" being whatever object is in .bind().

const bound2 = printThisBound.bind({
  objName: "bound2",
  prop: "this didn't work did it?",
}); // Does not work. Cannot nest binds. Cannot use .bind on something that .bind has already been used on.

console.log("bound2: ");
bound2();

const bound3 = printThis.bind({
  objName: "bound3",
  prop: "I work though.",
}); // second, third, etc. times using printThis.bind() will work fine.

bound3(); // you CAN bind from an original function and store it in a new variable/const as many times as you want.

const arrowPrintThis = () => {
  console.log("this from arrowPrintThis: ", this);
};

// cannot use bind on an arrow function
const arrowBound1 = arrowPrintThis.bind({
  objName: "arrowBound1",
  prop: "lolz",
}); // call and apply also fail to set 'this'

arrowBound1();

const testObj = {
  arrow: arrowPrintThis,
  nestedArrow: { test: arrowPrintThis },
  prop: "yeye",
};
//
testObj.arrow(); // still global because we're calling an arrow function that was defined in the global scope.
console.log("testObj.nestedArrow.test(): ");
testObj.nestedArrow.test();

// const testObj2 = {
//   arrow: arrowBound1,
//   nestedArrow: { test: arrowBound1 },
//   prop: "yeye",
// };

// console.log("testObj2.arrow(): ");
// testObj2.arrow();
// console.log("testObj2.nestedArrow.test(): ");
// testObj2.nestedArrow.test();
