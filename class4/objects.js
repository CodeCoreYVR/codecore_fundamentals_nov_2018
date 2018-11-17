/**
 * Objects
 */

const myObj = {
  a: 'a',
  b: 'b',
  c: 'c'
}

console.log(myObj);
for( let key in myObj ) {
  // this is how you access
  // object attributes
  // (by using square bracket) 
  const value = myObj[key];
  console.log(`${key} => ${value}`);
}

console.log('--------');
// this is how you can access
// an object attribute
// with the dot (.) notation
console.log( myObj.b );

myObj['d'] = 'd';
myObj.e = 'e';

console.log('--------');
for( let key in myObj ) {
  const value = myObj[key];
  console.log(`${key} => ${value}`);
}


/**
 * Lets build a car
 */

const car = {
  door: 4,
  color: 'red',
  run: () => {
    console.log('running ...');
  },
  openTrunk: () => {
    console.log('trunk opened');
  }
};

console.log(car);
car.run();

// in order to remove an item in the object
// you will need to use the delete key.
console.log('----------------')
console.log('before deleting', car);
delete car.color;
console.log('after deleting', car);

// this is how you add items to the car
car.closeTrunk = () => {
  console.log('trunk closed')
}

car.closeTrunk();