const person = {
    name: {
        first: "Bob",
        last: "Potato",
    },
    age: 31,
    bio() {
      console.log(`${this.name.first} ${this.name.last} is ${this.age} years old.`);
    },
    introduceSelf() {
      console.log(`Hi! I'm ${this.name.first}.`);
    },
  };


//adding new member name and value to person object  
const myDataName = "height";
const myDataValue = "1.75m";
person[myDataName] = myDataValue;

const weight = "weight";
const weightValue = "132lb";
person[weight] = weightValue;

  person.age = 51;
  person["name"]["last"] = "Beef";

function createCar(make, model, year) {
  const obj = {};
  obj.make = make;
  obj.model = model;
  obj.year = year;
  obj.introduceStmnt = function () {
    console.log(`I am the owner of a ${this.year} ${this.make}, ${this.model}`);
  };
  return obj;
}

//example of creating emty object, initializing it, and returning it
const myCar = createCar("Honda", "Civic", 2011);
myCar.make;
myCar.model;
myCar.year;
myCar.introduceStmnt;

//Constructor, a function called using the new keyword

function Person(name) { //note the capitalization
  this.name = name;
  this.introduceSelf = function () {
    console.log(`Hi, my name is ${this.name}.`);
  };
}

const frank = new Person("Frank");
frank.name;
frank.introduceSelf();

const jill = new Person("Jill");
jill.name;
jill.introduceSelf;
