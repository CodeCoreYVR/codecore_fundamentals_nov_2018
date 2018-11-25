/**
 * a method is a function within an object
 */
function hello() {
  console.log('hello 1!!!!!');
}

const obj = {
  hello2: hello
}

// hello(); // function
// obj.hello2(); // method

// in this case, the function is passed to the
// standard output (console) without execution
console.log( hello );

// by putting the parenthesis at the end
// of the function name, you are "calling"
// the function. In other words you are
// executing the function.
hello();
obj.hello2();