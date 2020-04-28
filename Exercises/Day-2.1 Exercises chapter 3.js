//Exercises chapter 3 - Functions from the Eloquent JavaScript book

//Minimum (write a function that returns the minimum)
function min(a, b){
  if(a<b) {
    return a
  } else {
    return b
  }
}

console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10

//Recursion
function isEven(a) {
  if (a === 0) {
      return true;
  } else if (a === 1) {
      return false;
  } else{
    return isEven(a-2);
  }

}

console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → ??

//Bean counting
function countBs(string){
  var count = 0;
  for(i = 0; i < string.length; i++){
 	if(string[i] === "B"){
       count = count + 1;
    }
  }
  return count;
}

function countChar(string, character) {
   var count = 0;
  for(i = 0; i < string.length; i++){
 	if(string[i] === character){
       count = count + 1;
    }

  }
  return count;
}
