# Concepts

* Scope
* Hoisting
* Closure

## Scope
De scope bepaald voor welk deel van de code iets, bijvoorbeeld variabelen, zichtbaar is.
* Iets gedeclareerdin de **Global** scope is zichtbaar voor alle code en kan je dus overal in de code aanspreken.
* **Local** of **Function** scope is alleen toegankelijk binnen functies. Een variabele die in een functie staat kan je dus niet buiten de functie aanroepen.
* **Block** scope is binnen een blok code zoals een `if()` statement. `let` en `const` zijn variabelen met een block scope. Ze zijn dus niet buiten een block toegankelijk.

```javascript
//Global

function greetings() {
//function scope / local scope
  var henk = "henk" // function scope / local scope

  if(true) { // block scope, GEEN nieuwe local scope
    let henk2 = "henk2" // block scope
  }

  console.log(henk); // henk
  console.log(henk2); // ERROR, henk2 not defined
}
```

```javascript
let x = 10;
if (true) {
  let y = 20;
  var z = 30;
  console.log(x + y + z);
  // → 60
}
// y is not visible here
console.log(x + z);
// → 40
```

Deze block scopes kunnen zich bevinden in andere blocks en functies. Waardoor je een geneste scope krijgt.

Waarom zou je niet alle variabelen in de global scope zetten?
1. **Botsingen in namen** Als er namen twee keer gebruikt worden in de global scope kan dit voor bugs zorgen.
2. **Onverwacht gedrag** Door de variabelen in de global scope te zetten kunnen andere developpers ze gebruiken op een manier die jij niet van plan was. Dit kan ervoor zorgen dat jouw code niet meer goed werkt.
3. **Onbedoelde afhankelijkheid** Als je variabelen onnodig blootstelt, nodig je andere developers uit om deze te gebruiken en afhankelijk zijn van deze variabelen.

## Hoisting
De definitie van hoisting suggereert dat variabele en functie declaraties fysiek naar de top van de code verplaatst worden. Maar dit is niet wat er gebeurd. De variabele en functie declaraties worden in het geheugen gestop tijdens de *compile* fase maar blijven staan waar jij ze getypt hebt in de code.

Het voordeel van JS dat de functie declaraties in het geheugen stopt voordat ze uitgevoerd worden is dat je een functie kan aanroepen/gebruiken voordat je het gedeclareerd hebt in jouw code:

```javascript
catName("Chloe");

function catName(name) {
  console.log("My cat's name is " + name); //Geeft "My cat's name is Chloe"
}
```

Hoisting werkt goed met andere datatypes en variabelen. Variabelen kunnen worden gebruikt voordat ze zijn gedeclareerd.

JS hoist alleen declaraties en niet initialisaties. Als een variabele is gedeclareerd en initialiseerd na gebruik zal de value undefined zijn:

```javascript
console.log(num); // Returns undefined
var num;
num = 6;
```

Als je de variabele declareerd na gebruik maar initialiseerd voor gebruik werkt het wel:

```javascript
num = 6;
console.log(num); // returns 6
var num;
```

Dit heeft te maken met de **execution context** waarbij eerst de declaraties worden aangemaakt in de *creation phase*. Er wordt ruimte aangemaakt voor de declaraties en deze wordt de waarde `undefined` assigned. Echter pas in de *execution phase* worden de waardes/values aan de declaraties assigned.

## Closures
In JS function zijn niet alleen functies, ze zijn ook closures. Dat betekent dat de functie body toegang heeft tot de variabelen die buiten de functie gedeclareerd zijn.

Dus binnen een functie kan je een variabele aanroepen die buiten de functie staat:

```javascript
var me = 'Lynn';

function greetMe() {
  console.log('Hello, ' + me + '!');
}

greatMe(); //Geeft 'Hello Lynn!'
```  

Door closure kan je in `func3` een variabele aanroepen die zich buiten de functie bevindt: in de **outer scope**. Daarom kan je in de `console.log()` in `func3` `henk1` aanroepen en als resultaat `"henk1"` krijgen.

```javascript
// global scope
var henk1 = "henk1"

function func1() {
  //local scope
  var henk2 = "henk2"

    function func2() {
      //local scope
      var henk3 = "henk3"

      function func3() {
        //local scope
        var henk4 = "henk4"

        console.log(henk1)
      }
    }
}
```
