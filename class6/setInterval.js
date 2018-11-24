// const hello = function() {
//   console.log('.');
//   setTimeout(hello, 1000);
// }

// hello();

// the equvalent of this is setInterval

const hello = () => {
  console.log('.');
}
const id = setInterval(hello, 1000);
clearInterval(id);