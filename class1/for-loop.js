/**
 * For loop syntax
 * 
 * while( { {expression} ) {
 *  ...
 *  {statement}
 *  ...
 * }
 */


for( let index = 0; index <= 3; ++index )
{
  console.log(`The value of index in this iteration is ${index}`);
}

console.log('----------------------');
// the previous for loop behaves exactly as the following
// while loop.
let index = 0;
while( index <= 3 ) {
  console.log(`The value of index in this iteration is ${index}`);
  ++index;
}

// console.log('----------------------');

// for( let index = 0; index <= 3; index += 2 )
// {
//   console.log(`The value of index in this iteration is ${index}`);
// }

// /**
//  * Inverse
//  */

// console.log('----------------------');

// for( let index = 3; index >= 0; --index )
// {
//   console.log(`The value of index in this iteration is ${index}`);
// }


// const limit = Math.floor(Math.random() * 100);
// for( let index = 0; index <= limit; ++index )
// {
//   console.log(`The value of index in this iteration is ${index}`);
// }





