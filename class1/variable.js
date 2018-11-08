/**
 * A variable is a container that holds a value
 * A variable has accessibility, name and a value
 * 
 * the accessibility is set by one keyword
 * const, let or var
 * 
 */

// By writing the following:
const myFirstNumber = 2;

// the program knows that the variable cannot be changed.
// this is because we used the keyword const.


// we declare an inmutable variable
const myFirstNumber = 2;
console.log(myFirstNumber);

// myFirstNumber = 4; this will crash the program

// we declare a mutable variable
let mySecondNumber = 3;
console.log(mySecondNumber);
// let mySecondNumber = 4; // this will crash the program
mySecondNumber = 4;
console.log(mySecondNumber);

// Syntax is as follows:
// In the following syntax we are both
// declaring and initializing a variable
// {Keyword} {VariableName} = {Value};

// when declaring a variable without a Value
// the memory gets assigned but its value is
// `undefined`
let helloWorld;
helloWorld // undefined

const hello;

