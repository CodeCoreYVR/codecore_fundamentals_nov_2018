let iterations = 0;
let freq = 1000;
const cutoff = 9;
const func = function() {
  iterations++;
  console.log('.', iterations, cutoff, id)
  if( iterations === cutoff ) {
    clearInterval(id);
    console.log('see ya!')
  }
};

const id = setInterval(func, freq);