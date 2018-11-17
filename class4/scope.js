/**
 * const/let will assign variables
 * in its surrounding block.
 */
let firstName = 'Jesus';

console.log(`firstName: ${firstName}`);

{
  // in this case we are
  // creating a local variable which
  // is assigned to the immediate block
  let firstName = 'Arturo';
  let lastName = 'Rodriguez';
  var age = 35;
  console.log(`firstName: ${firstName}`);
  console.log(`lastName: ${lastName}`);
  console.log(`age: ${age}`);
}

console.log(`firstName: ${firstName}`);
// console.log(`lastName: ${lastName}`); // crashes
console.log(`age: ${age}`);