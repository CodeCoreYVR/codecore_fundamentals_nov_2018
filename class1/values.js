/**
 * Primitive values
 * 
 *  . undefined
 *  . null
 *  . boolean true/false
 *  . string
 *  . numbner
 */

// example of a boolean
true;
false;

// example of a string
"Hello World with double quotes"
'Hello World with single quotes'
`Hello World with backticks`

// example of number
23
23.24
-23
-23.24


/****************************
 * the following was executed
 * in repl.it
 */


/**
 * this is a comment
 */

// another comment

/**
 * Line 43 - 48 will print everything to the console
 */

console.log('This is a string 1')
console.log('This is a string 2')
console.log('This is a string 3')
console.log('This is a string 4')
console.log('This is a string 5')
'This is a string 6'

/**
 * Line 56 - 60 will print everything to the console
 * it will ignore the first string
 */

'This is a string 0'
console.log('This is a string 1')
console.log('This is a string 2')
console.log('This is a string 3')
console.log('This is a string 4')
console.log('This is a string 5')
'This is a string 6'

/**
 * The same rules we saw nwith strings
 *  apply to all different
 * value types
 */

 33
44
55

/**
 * Here is a list of exceptional
 * examples where you will get the
 * following non primitive values
 *  NaN
 *  Infinity
 * -Infinity
 */

'Hello ' + 'World'
2 + 'World'
"test" * 5 // NaN
1/0 // Infinity
1/-0 // -Infinity