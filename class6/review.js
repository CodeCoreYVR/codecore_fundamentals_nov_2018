/**
 * Review Excercises
 */

// Write a function that take any number but returns 0
const funcA = (aNumber) => {
  if( !Number.isInteger(aNumber) ) {
    throw `${aNumber} is not a number`;
  }
  return 0;
}

// write a function that takes a user object with name and age
// properties, and logs the string "[name] is [age] years old".
const funcB = (person) => {
  console.log(`${person.name} is ${person.age} years old.`);
}

// write a function that takes a sentence and returns an object
// of all the words and their lengths

const wordLengths = (sentence) => {
  const sentenceArr = sentence.split(' ');
  let obj = {};
  for ( let item of sentenceArr ) {
    obj[item] = item.length
  }
  return obj;
}