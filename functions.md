# Functions

* Basics
  * Defining a function
  * Calling a function
* Function expression
* Parameters and arguments
* Return
* Arrow functions
* Methods
* Callback function
* For each
* Call stack
* Recursion


Higher order functions
* Filter arrays
* Map
* Reduce

## Basics
### Defining a function  
```javascript
function myFunction() {
   //Code hier
}
```
Dit is een function declaration

Door zelf een functie te maken kan je je code goed georganiseerd houden. Ook kan je functie herhalen door hem twee keer aan te roepen.

### Calling a function
Als je wil dat een functie gaat werken moet je de functie aanroepen. Anders weet het programma niet wanneer hij de code moet uit voeren en voert hij de code gewoon niet uit.

``` javascript
myFunction();
```

## Function expression
```javascript
  const speak = function(){
    //code hier
  }; //Een expression wordt afgesloten met een semi-colon.

  speak(); //functie aanroepen
```
De functie heeft nu de naam 'speak'.
Bij een function expression zet je als het ware een functie in een variabele.

Het verschil tussen een function declaration en function expression is het hoisten. Bij een declaration kan de functie onderaan staan en js hoist deze functie naar boven in de code waardoor de functie aangeroepen kan worden voor dat de code genoteerd is. Function expressions worden niet gehoist.

## Parameters and arguments
Je kan aan functies een value meegeven tussen de haakjes. Je maakt in feite een variabele aan in de functie en geeft deze een naam (parameter). Je moet deze waarde meegeven als je de functie aanroept (argument).
``` javascript
const speak = function(name, time ){ //parameters
  console.log(`good ${time} ${name}`)
};

speak('Lynn', 'morning'); //arguments
```
Dit geeft: **good morning Lynn** in de console.

Als je de functie geen arguments meegeeft als je de functie aanroept zal het resultaat: **good undefined undefined** zijn. Dit kan je voorkomen door bij de parameters een standaard waarde mee te geven:
``` javascript
const speak = function(name = 'Lynn', time = 'night' ){
  console.log(`good ${time} ${name}`)
};

speak();
```
Dit geeft **good night Lynn**

Als je de arguments wel meegeeft zullen deze de standaard waarde in de parameters overschrijven.

Als je bij het aanroepen van de functie meer arguments toevoegt dan dat er parameters zijn zal de computer de extra arguments negeren. Als je te weinig arguments hebt, krijgen deze de waarde `undefined`. Het nadeel hiervan is dat je misschien het verkeerde aantal arguments noteerd en niets laat je weten dat dit fout is. Het voordeel is dat je een functie kan aanroepen met verschillende aantallen aan argumenten.

```javascript
function minus(a, b) {
  if (b === undefined) return -a;
  else return a - b;
}

console.log(minus(10));
// → -10
console.log(minus(10, 5));
// → 5
```

## Return
Door `return` in een functie te gebruiken en in een variabele te zetten kan je deze waarde later in het script gebruiken. Dit kan niet als je alleen `console.log();` gebruikt in een functie. Door `return` te gebruiken sla je de waarde als het ware op. Je kan deze waarde opslaan in een variabele door de functie te callen:
``` javascript
const area = calcArea(5);
```

 Je kan nog een functie maken en de waarde dat met `return` uit de vorige functie hergerbuiken.

## Arrow Functions
Deze functies zijn een stuk korter en cleaner dan gewone functies. In plaats van het keyword `function` wordt er een arrow (=>) gebruikt.

```javascript
//Gewone functies
function nameFunction(a) {
  //code hier
}

//Arrow functie
var nameFunction = (a) => {
  return a + 1;
};

//of (alleen met één parameter, met geen of meerdere parameters zijn er wel haakjes nodig)
var nameFunction = a => {
  return a + 1;
};

//of (alleen met één return/regel code, je kan de 'return' keyword en de '{}' weglaten)
var nameFunction = a => a + 1;
```

## Methods
Methods zijn functies, maar het zijn functies die horen bij een object of datatype zoals een string, wat verschilt is hoe de method gedefined wordt en gecalled/invoked wordt.

Je invoked een method met de dot-notation:
```javascript
  name.toUpperCase()
```
Waarbij `toUpperCase` de method is.

Methods worden gedefined op een object of een datatype.

```javascript
const name = 'lynn'
//Function
const greet = () => 'hello'

let resultOne = greet();
console.lpg(resultOne) //Geeft hello

//method
let resultTwo = name.toUpperCase();
console.log(resultTwo); // Geeft LYNN
```

## Callback Function
Een callback function is wanneer er een functie wordt doorgegeven in een argument.

```javascript
const myFunc = (callBackFunc) => {
  //do something
  let value = 50;
  callBackFunc(value);
};

myFunc(function(value){
  //do something
  console.log (value);
});
```
Er wordt een anonieme functie gebruikt als argument. Deze functie wordt aangeroepen in de `myFunc` functie.

## For each
Dit is een method dat itereert over een array een beetje zo als een loop.

```javascript
let people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li']

people.forEach(function(person){
  console.log(person);
}); //Geeft mario, luigi, ryu, shaun en chun-li

//Als arrow Function
people.forEach(person => {
  console.log(person);
});

//Met tweede parameter
people.forEach((person, index) => {
  console.log(index, person);
});
```

## Call stack
Dit is de plek waar de computer context bewaard. Dit is omdat de flow van JS niet van boven naar beneden gaat. Als er een functie aangeroepen wordt moet de computer de context weten om de goede funtie aan te roepen en die context staat in de call stack. Dit heeft ruimte nodig in het geheugen van de computer. Als de stack te groot is zal de computer falen.


## Recursion
Een functie dat zichzelf aanroept wordt **recursive** genoemd. Dit is goed moegelijk zo lang het de stack niet overflows. Dit heeft wel een probleem: het is 3x langzamer dan de looping versie.
```javascript
function power(base, exponent) {
  if (exponent == 0) {
    return 1;
  } else {
    return base * power(base, exponent - 1); //roept zichzelf aan
  }
}
```

## Side effects
Je kan functies zo'n beetje in twee groepen verdelen:
* functies voor hun side effects.
* functies voor hun return waarde.

# Higher order functions
* Een functie dat een functie in zijn parameter heeft. Je roept een functie aan en je geeft een functie mee als een argument.
```javascript
function sing(callback){
    console.log('la la la la')
    callback();
}
function meow() {
    console.log('meow meow');
}
sing(meow)
//Geeft 'la la la la' en 'meow meow'
```

* Of als een functie een functie returns.
```javascript
function multiplier(factor) {
    return function (x) {
      return x * factor;
    }
}
```
* Er zijn een hoop van dit soort functies zijn beschikbaar voor Arrays: `map()`, `sort()`, `reduce()`, `filter`.

## Filter Arrays
Deze functie filtert de elementen uit een array die niet aan de voorwaarden voldoen en maakt een nieuwe array met de elementen die wel aan de voorwaarden voldoen. Dit is een standaard array method.

```javascript
let arr = [5, 4, 9, 2, 1];

function isEven(num) {
  return (num % 2 === 0);
  //Als het statement true is, behoud hij de waarde. Is het false dan wordt de waarde uit de array gehaald.
}

arr = arr.filter(isEven);
console.log(arr); //Geeft: [4,2]
```

## Map
Deze method verandert een array door een functie toe te passen op alle elementen van de array om een nieuwe array te maken met de waarden die gereturned worden.

```javascript
let vals = [4, 8 ,1 ,2 ,9 ];

function doubler(x) {
  return x * 2;
}

let doubled = vals.map(doubler);
console.log(doubled); //Geeft: [8, 16, 2, 4, 18]
```

## Reduce
Deze method maakt van alle waarden van de array één waarde. Hij reduced de waarden.

```javascript
let vals = [5, 4, 1, 2, 9];

function sum (acc, val) {
  return acc + val;
}

let answer = vals.reduce(sum, 0);
console.log(answer); //Geeft: 21
```

```javascript
console.log([1, 2, 3, 4].reduce((a, b) => a + b));
// → 10
```
