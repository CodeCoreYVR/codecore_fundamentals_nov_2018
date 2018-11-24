/**
 * sample on this
 */
const car = {
  door: 4,
  make: 'kia',
  model: 'soul',
  run() {
    console.log('eco running ');
    // return this; // this === car
  },
  openTrunk: () => {
    console.log('trunk opened');
    return this;
  },
  printDoors() {
    console.log(`doors: ${this.door}`);
    // this.run(); // you can access methods too
  }
}

// when i print the car object,
// i get the object and its
// attribute members
// console.log(car);

console.log( car.run() );

// Q: why should use the this keyword?

// A: chaining methods
car.run().openTrunk();
// // is the equivalent of the following
car.run();
car.openTrunk();

// A: accesing object members within methods
car.printDoors();



