//Exercises chapter 5 - Higher-Order Functions from the Eloquent JavaScript book

//Flattening
let arrays = [[1, 2, 3], [4, 5], [6]];
function test (acc, cur){
 	return acc.concat(cur)
}
console.log(arrays.reduce(test));
// → [1, 2, 3, 4, 5, 6]

//Your own loop
function loop(value, testFunction, updateFunction, bodyFunction){
  while (testFunction(value)) {
   bodyFunction(value);
   value = updateFunction(value);
  }
  return;
}


loop(3, n => n > 0, n => n - 1, console.log);

//Everything
function every(array, test) {
  let boolean = true;
  array.forEach(element => {
    if (!test(element)) {
      boolean = false;
      return;
    }
  });
  return boolean;
}

function every1(array, test) {
  return !array.some(element => !test(element));
}

console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true
