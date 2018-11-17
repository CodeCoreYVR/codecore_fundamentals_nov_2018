/**
 * Arrays.
 * 
 * It's a way of storing values
 * sequentially.
 */

const months = [
  "January",
  "February"
  //...
];

/**
 * You can also nest arrays!!!
 */

const yes = 'Y';
const no = 'N';
const board = [
  [yes, yes, no, no],
  [no, yes],
  [yes, yes, no, no, yes, no, no],
  [no, no, yes, yes],
  [no, no, yes, yes]
];

console.log(
  `The number of columns in the board is ${board.length}`
);

for ( let index in board ) {
  console.log(`the board has ${
    board[index].length
  } rows in the ${index} position`);
}


const board1 = [
  [yes, no],
  [no, no]
];
for( let column of board1 ) {
  for (let rowItem of column ) {
    console.log(rowItem)
  }
}

const yes = 'Y';
const no = 'N';
const board2 = [
  [yes, no],
  [no, no]
];
console.log('before loop', board2);
for( let ci = 0; ci < board2.length; ci++ ) {
  const row = board2[ci];
  for(let ri =0; ri < row.length; ri++ ) {
    if( ci === 0 && ri == 1 ) {
      row[ri] = 'O';
    }
    const value = row[ri];
    console.log(`${ci} - ${ri} - ${value}`);
  }
}
console.log('after loop', board2);

// not to be confused with string
// manipulation
const hello = 'hello world';
console.log( hello[4] );
hello[4] = '-';
console.log( hello[4] );



const board3 = [];
const printLoop = (arr) => {
  arr.push('NONE!');
  for ( let item of arr ) {
    console.log(`item: ${item}`);
  }
  console.log('------- the end');
}

console.log('---10', board3);
// print board before adding items
printLoop(board3);
console.log('---13', board3);

// add a value
board3.push('Arthur');

console.log('---18', board3);
board3.push('Maz');

console.log('---21', board3);
board3.push('Kay');

console.log('---24', board3);
board3.push('Arturo');

console.log('---27', board3);
// print board after adding items
printLoop(board3);

console.log('---31', board3);

// console.log(board3.pop());

// // print board after adding items
// printLoop(board3);



/**
 * Turn a string into array
 * and back.
 */

const sentence = 'My name is Arturo';
const sentenceArr = sentence.split(' ');

console.log(`the value of sentence is "${sentence}"`);
console.log(sentenceArr);
console.log(`the value of sentence is "${sentenceArr.join(' ')}"`);
