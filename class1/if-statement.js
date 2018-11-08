/**
 * IF/else statement
 * 
 * its syntax looks like so:
 * 
 * if( {expression} ) {
 *   ... // will get executed if expression is true
 *   {statement}
 *   {statement}
 *   ...
 * } else {
 *   ... // will get executed if expression is false
 *   {statement}
 *   {statement}
 *   ...
 * }
 */

console.log('do you like chocolate?');
const likeChocolate = false;

console.log(`your answer was ${likeChocolate}`)

// a more complicated scenario:

console.log('do you like chocolate?');
const likeChocolate = false;

// ---------------------------------------
// in this case, my if statement processes
// a boolean
if ( likeChocolate ) {
  console.log('Nice, You are lucky!');
} else {
  console.log( 'you are pretty unusual.' );
}
/**
 * Display which category a user belongs to
 * where the values are:
 * 
 * Cat A (10 <-> 20 all inclusive)
 * Cat b (21 <-> 30 all inclusive)
 * Cat C (31 <-> 40 all inclusive)
 */

const age = 55;
if ( age >= 10 && age <= 20 )
{
  console.log(`Based on your age (${age}), you belong to category A`);
}
else if ( age >= 21 && age <= 30 )
{
  console.log(`Based on your age (${age}), you belong to category B`);
}
else if ( age >= 31 && age <= 40 )
{
  console.log(`Based on your age (${age}), you belong to category C`);
}
else
{
  console.log("You don't qualify for any category");
}








