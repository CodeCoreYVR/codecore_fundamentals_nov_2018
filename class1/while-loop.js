/**
 * For loop syntax
 * 
 * for( {variable-definition}; {expression}; {expression} ) {
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

for( let index = 0; index <= 3; index += 2 )
{
  console.log(`The value of index in this iteration is ${index}`);
}

/**
 * Inverse
 */

console.log('----------------------');

for( let index = 3; index >= 0; --index )
{
  console.log(`The value of index in this iteration is ${index}`);
}


const limit = Math.floor(Math.random() * 100);
for( let index = 0; index <= limit; ++index )
{
  console.log(`The value of index in this iteration is ${index}`);
}





