/**
 * a method is a function within an object
 */
function hello() {
  console.log('hello 1')
}

const obj = {
  hello2: hello,
  hello3() {
    console.log('hello 3')
  },
  hello4: function(){
    console.log('hello 4')
  },
  hello5: () => {
    console.log('hello 5')
  }
}

hello(); // function
obj.hello2(); // method

/**
 * the idea behind objects is to encapsulate
 * data and behavior
 */

const car = {
  door: 4,
  make: 'kia',
  model: 'soul',
  run() {
    console.log('eco running ');
  },
  openTrunk: () => {
    console.log('trunk opened');
  }
}

const car1 = Object.assign({}, car);

car.airConditioning = true;
car.closeTrunk = function(){
  console.log('trunk closed');
}

car.closeTrunk()
console.log('car', car);
console.log('car1', car1)

console.log(Object.keys(car));


