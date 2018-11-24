const doubleIt = (x) => {
  return 2 * x;
};

const call = (aNumber, aFunction) => {
  return aFunction(aNumber);
}

console.log( call(5, doubleIt) );

// another example of a high order function

arr.map((currentValue, index, fullArr) => {
  console.log(currentValue, index, fullArr)
});

