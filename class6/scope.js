let letInGlobalScope = 'let from global namespace';

// in this case, i'm creating a new scope.
{
  let letInLocalScope = 'let from local namespace';
  var varInLocalScope = 'var from local scope';
  letInGlobalScope += ' (modified)'
  console.log(varInLocalScope);
  console.log(letInGlobalScope);
  console.log(letInLocalScope);
}
console.log('12', varInLocalScope);
console.log(letInGlobalScope);
console.log(letInLocalScope);
