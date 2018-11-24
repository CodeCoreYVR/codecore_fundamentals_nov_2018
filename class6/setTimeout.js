const hello = () => {
  console.log('hello world');
}

console.log('about to call timeout');
setTimeout(hello, 3000); // gets called after 3 seconds
console.log('timeout was called');

const hello = () => {
  console.log(new Date());
  setTimeout(hello, 1000);
}

hello();


// setTime retrieves an identifier
// which can be used to interrupt
// the setTimeout process


const hello = () => {
  console.log('program ended');
}

console.log('running program');
const id = setTimeout(hello, 10000); // gets called after 3 seconds

clearTimeout(id);
console.log('program was interrupted!');