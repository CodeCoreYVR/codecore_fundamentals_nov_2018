const printType = (aVar) => {
  console.log( `${aVar} typeof => ${typeof(aVar)}` );
}

printType('5'); // string
printType('hello world'); // string
printType(4); // number
printType(4.45); // number
printType([3, 4, 6]); // object
printType({name: 'arturo'}); // object
printType(() => {}); // function