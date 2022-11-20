// warning about incrementing and stuff that modifies the object because we haven't covered "this"
function makeCar(make, model) {
  return {
    make,
    model: model,
    makeNoise: function () {
      console.log("Vroom");
    },
  };
}

// Do the prototype version too, and the object create.

const c1 = makeCar("Toyota", "Venza");
const c2 = makeCar("Aston Martin", "DBS");
