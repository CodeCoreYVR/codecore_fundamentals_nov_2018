const sayHello = () => {
  console.log('Hello there!!!!');
};

const sayBye = () => {
  console.log('seeyee yaaa!!!!');
};

// this is a high order function
// because it receives a function
// as a parameter
const runThreeTimes = (func) => {
  func();
  func();
  func();
}

//manual way of running the same function 3 tiems

// sayHello();
// sayHello();
// sayHello();

// sayBye();
// sayBye();
// sayBye();

// this is how you programatically run the same function 3 times

runThreeTimes( sayHello );
runThreeTimes( sayBye );
runThreeTimes( () => {
  console.log('this is an annonymous function');
  });
