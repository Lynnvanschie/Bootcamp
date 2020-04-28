# Datastructures

* Arrays
* Objects
* Properties
* Methods
* Mutability
* Rest Parameters
* Math object
* JSON
* Loops


## Arrays
Een array is een lijst van values gescheiden door komma's tussen vierkante haken.

```javascript
var nums = [2, 3, 6, 10, 11];
```
Elementen in een array hebben een index. De telling begint bij 0. Dus `2` heeft een index waarde van 0 en `3` een index waarde van 1.

Als je een waarde uit een array wilt aanroepen doe je dat met de index waarde: `nums[2]` geeft de waarde `6`.

Je kan van alles in een array zetten, bijvoorbeeld tekst en objecten.
```javascript
  var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];
```

## Objects
Een object is een manier om jouw variabelen beter te organiseren. Je kan met een object variabelen die bij elkaar horen groeperen.

```javascript
var cirle = {
  x: 0,
  y: 100,
  diameter: 50
};
```
Om een variabele uit een object te roepen gebruik je *dot syntax* met `circle.x` roep je de `x` variabele uit het object `circle` aan. Als je een property hebt met een string met daarin een spatie kan je de dot notatie niet gebruiken en moet je de brackets gebruiken.

Om te kijken welke propterties een object hebt kan je de `Object.keys` functie gebruiken:

```javascript
console.log(Object.keys({x: 0, y: 0, z: 2}));
// → ["x", "y", "z"]
```

`Object.assign` kopieerd alle properties van een object naar een ander.

```javascript
let objectA = {a: 1, b: 2};
Object.assign(objectA, {b: 3, c: 4});
console.log(objectA);
// → {a: 1, b: 3, c: 4}
```

## Properties
Expressions die toegang hebben tot een eigenschap van een value. De `.length` property geeft de lengte van de value die ervoor staat.

```javascript
let myString = 'Mooi'

console.log(myString.length); //Geeft 4
```
Bijna alle JavaScript values hebben properties. Behalve `null` en `undefined`.

De twee manieren om toegang te krijgen tot de properties is de dot syntax en squared brackets: `value.x` en `value[x]`

## Methods
- Een method is een propertie van een object dat een functie is.

- Een method is een functie die is opgeslagen in een object.

- Properties die functies bevatten noemen we methods van de value waar ze bij horen.

(Drie definities die hetzelfde betekenen)

### Methods voor een array
De `.push()` method voegt een waarde toe aan het einde van een array.  
De `.pop()` method haalt juist de laatste waarde uit de array.  
De `.shift()` method voegt een waarde toe aan het begin van een array.  
De `.unshift()` methode haalt de eerste waarde uit een array.

De `.indexOf(value)` method zoekt door de array en returns de index waarin de gevraagde value gevonden wordt.
De `.lastIndexOf(value)` doet het zelfde maar kijkt van het einde naar het begin.

```javascript
console.log([1, 2, 3, 2, 1].indexOf(2));
// → 1
console.log([1, 2, 3, 2, 1].lastIndexOf(2));
// → 3
```

De `.slice(value,value)` method neemt een begin en een einde en returns een array met alleen de elementen tussen die twee waarden. Waarbij de begin waarde meegenomen wordt in de nieuwe array maar de eind waarde niet. Als er geen einde wordt genoemd zal `slice` alle waarden voor de start index eraf halen

```javascript
console.log([0, 1, 2, 3, 4].slice(2, 4));
// → [2, 3]
console.log([0, 1, 2, 3, 4].slice(2));
// → [2, 3, 4]
```

De `.concat()` method kan gebruikt worden om arrays aan elkaar te plakken.

De `slice` en `indexOf` methods kunnen ook gebruikt worden voor strings:

```javascript
console.log("coconuts".slice(4, 7));
// → nut
console.log("coconut".indexOf("u"));
// → 5
```
Bij `indexOf` kan er ook gezocht worden voor meer dan een karakter:
```javascript
console.log("one two three".indexOf("ee"));
// → 11
```

De `trim()` method haalt whitespace weg van het begin en einde van een string:
```javascript
console.log("  okay \n ".trim());
// → okay
```

De `padStart()` method neemt de gewilde lengte van een value en padding karakter als arguments:
```javascript
console.log(String(6).padStart(3, "0"));
// → 006
```

Je kan een string met `split()` splijten en weer aan elkaar plakken met `join()`:
```javascript
let sentence = "Secretarybirds specialize in stomping";
let words = sentence.split(" ");
console.log(words);
// → ["Secretarybirds", "specialize", "in", "stomping"]
console.log(words.join(". "));
// → Secretarybirds. specialize. in. stomping
```

Een string kan herhaald worden met de `repeat()` method:
```javascript
console.log("LA".repeat(3));
// → LALALA
```

Met `length` kan je individuele karakters in een string behandelen als een array:

```JavaScript
let string = "abc";
console.log(string.length);
// → 3
console.log(string[1]);
// → b
```

## Mutability
Bepaalde values, zoals numbers, string en booleans, zijn onveranderlijk. Het is onmogelijk om de values van die types te veranderen. Je kan ze combineren en er nieuwe values van maken.

Bij objecten kan dit wel, mits het object *niet* in een `const` gedeclareerd is. Je kan bij objecten wel hun properties aanpassen, omdat een object value kan verschillende content bevatten op verschillende momenten.

## Rest parameters
Het is handig als een functie elk aantal aan argumenten kan accepteren. Om zo'n functie te schrijven zet je `...` voor de laatste parameter:
```javascript
function max(...numbers) {
  let result = -Infinity;
  for (let number of numbers) {
    if (number > result) result = number;
  }
  return result;
}
console.log(max(4, 1, 9, -2));
// → 9
```
Met zo'n functie is de *rest parameter* gebonden aan een array met alle argumenten.

Je kan deze three-dot notatie ook gebruik om een functie aan te roepen met een array van arguments:
```javascript
let numbers = [5, 1, 7];
console.log(max(...numbers));
// → 7
```

## Math object
Dit object wordt gebruikt als een container om een aantal gerelateerde functionaliteiten bijelkaar te groeperen.

Voorbeelden:
* `Math.max`: maximum
* `Math.min`: minimum
* `Math.sqrt`: square root
* `Math.cos`: cosinus
* `Math.sin`: sinus
* `Math.tan`: tangent
* `Math.random`: geeft een nieuw nummer tussen 0 en 1.
```javascript
console.log(Math.random());
// → 0.36993729369714856
```
* `Math.floor`: rond een nummer af naar een heel getal.
```javascript
console.log(Math.floor(Math.random() * 10));
// → 2
```
* `Math.ceil`: rond een getal af naar boven.
* `Math.round`: rond een getal af naar het dichtsbijzijnde hele getal.
* `Math.abs`: neemt de absolute waarde van een getal. Het negeert negatieve waarden en laat positieve zoals ze zijn.

# JSON
'JavaScript Object Notation' wordt gebruikt als data storage en communicatie om het web. Het lijkt op JS manier van het schrijven van arrays en objects. Maar het heeft meer beperkingen.

JavaScript geeft de functies `JSON.stringify` en `JSON.parse` om data te converteren naar JSON


## Loops
Een `while()` loop runs wanneer een specifieke condition waar is en stopt zodra deze niet meer waar is.

Een `for()` loop runs voor een specifiek aantal keer. Forloops worden gedeclareerd met drie optionele expressions gescheiden door `;`:
`for ([initialization]; [condition]; [final-expression])`  
De *initialization* wordt een keer uitgevoerd voor dat de loop begint en defined de setup van jouw loop. De *condition* wordt belkenen aan het begin van elke loop en dat zal doorgaan als de uitkomst true is. Als deze false is stopt de loop.
De *final-expresson* wordt uitgevoerd aan het einde van elke loop voor de volgende condition check en geeft meestal de verhoging of verlaging van de condition aan.

Een `do...while` loop zal altijd een pass van de code inside de loop uitvoeren en daarna zal het de while loop uitvoeren als de condition true is. Deze do..while loop zorgt ervoor dat de code altijd ten minste een keer uitgevoerd wordt.
