/**
 * Function Syntax
 */

// option 1

// in the parentesis, you can assign
// parameters
const aFunction = function(/* params */) {
  // statements go here
  // you may or may not return a value
}

// options 2

// this syntax is called an annonymous
// function
const anotherFunction = (/* params */) => {
  // statments go here
  // you may or may not return a value
}

// option 3

function aDifferentFunction (/* params */) {
  // statments go here
  // you may or may not return a value
}

const printMessageToConsole = function(){
  console.log('Hello world');
}
printMessageToConsole();


/**
 * Practical example of function
 * that receives params and
 * produces a value
 * 
 * receive 2 values,
 * add them, and return
 * the result
 */

const add2Numbers = (num1, num2) => {
  return num1 + num2;
}

console.log( add2Numbers(2, 2) );

/**
 * Practical example of function
 * that receives params and
 * does not produce a value
 */

const log = (message) => {
  console.log(message);
}

log('loading user info');