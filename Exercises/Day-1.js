//Exercises bootcamp day 1
//Ik heb de meest simpele opdrachten weggelaten!

//Finding a remainder
5 % 2 = 1 //want
Math.floor(5 / 2) = 2 //(Quotient)
2 * 2 = 4
5 - 4 = 1 //(Remainder)

//Augmented addition, subtraction, multuplication and devision
var myVar = 1;
myVar += 5;
console.log(myVar); // Returns 6
//Deze werkt ook voor string concatenating

var a = 11
a -= 6; //Returns 5

var b = 12;
b *= 3; //Returns 36

var c = 33;
c /= 11; //Returns 3

//Escapen in een String
var myStr = "I am a \"double quoted\" string inside \"double quotes\".";

//Lengte string bepalen
var lastNameLength = 0;
var lastName = "Lovelace";

lastNameLength = lastName;
lastNameLength = lastName.length;

//Eerste letter string bepalen
var firstLetterOfLastName = "";
var lastName = "Lovelace";

firstLetterOfLastName = lastName;
firstLetterOfLastName = lastName[0];

var thirdLetterOfLastName = lastName[2]; //Derde letter bepalen

var lastLetterOfLastName = lastName[lastName.length-1]; //Laatste letter bepalen

var secondToLastLetterOfLastName = lastName[lastName.length - 2]; //Een na laatste letter

//Nested Array
var myArray = [[["Bulls", 23], ["White Sox", 45]]];

//Modify Array data
var myArray = [18,64,99];
myArray[0] = 45; //Geeft

var myArray = [45,18,64,99];

//Manipulate Arrays
//with push() (voegt toe aan einde array)
  var myArray = [["John", 23], ["cat", 2]];
  myArray.push(["dog", 3])
  //Geeft [["John", 23], ["cat", 2], ["dog", 3]]

//with pop() (haalt laatste item weg)
  var myArray = [["John", 23], ["cat", 2]];
  var removedFromMyArray = myArray.pop();
  console.log(removedFromMyArray); //Returns ["cat", 2]
  console.log(myArray); //Returns [["John", 23]]

//with shift() (haalt eerste item weg)
  var myArray = [["John", 23], ["dog", 3]];
  var removedFromMyArray = myArray.shift();

//with unshift() (voegt item toe aan begin)
  var myArray = [["John", 23], ["dog", 3]];
  myArray.shift();

  myArray.unshift(["Paul", 35])

//Toevoegen en verwijderen uit Arrays
function nextInLine(arr, item) {
  arr.push(item); //Voegt item aan einde toe
  var removed = arr.shift(); //Haalt eerste item weg
  return removed;
}

// Logical Operators
if (val <= 50 && val >= 25) { //Door && te gebruiken heb je maar een if statement nodig.
    return "Yes";
  }
  return "No";
}

if (val < 10 || val > 20) {
    return "Outside";
  }
  return "Inside";
}
//Door &&/|| te gebruiken heb je maar een if statement nodig.
