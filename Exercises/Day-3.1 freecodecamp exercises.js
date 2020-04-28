//Exercises bootcamp day 3 loops

//While loop (runt zolang een bepaalde confitie waar is en stopt als deze niet meer waar is)
var myArray = [];

var i = 5
while(i >= 0) {
  myArray.push(i);
  i--;
}

//For loop (runt voor een speciek aantal keer)
var myArray = [];

for (var i = 1; i < 6; i++) {
  myArray.push(i);
}

//For oneven getallen
var myArray = [];

for (var i = 1; i < 10; i += 2) {
  myArray.push(i);
}

//For loop terug tellen
var myArray = [];

for (var i = 9; i > 0; i -= 2) {
  myArray.push(i);
}

//Itereren door een array met for
var myArr = [ 2, 3, 4, 5, 6];

var total = 0
for (var i = 0; i < myArr.length; i++) {
   total += myArr[i];
}

//Nesten van for loops
function multiplyAll(arr) {
  var product = 1;

  for (var i = 0 ; i < arr.length ;i++){
    for (var j = 0 ; j < arr[i].length ;j++){
      product = product * arr[i][j];
    }
  }

  return product;
}

multiplyAll([[1,2],[3,4],[5,6,7]]);

//Do...While loops
var myArray = [];
var i = 10;

do {
  myArray.push(i);
  i++;
} while (i<5);

//Recursion
function sum(arr, n) {
  if (n <= 0) {
    return 0
  } else{
    return sum(arr, n - 1) + arr[n - 1];
  }
}
