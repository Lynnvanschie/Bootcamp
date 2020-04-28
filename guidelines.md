# JS guidelines

* Elke nieuwe line JS komt op een nieuwe regel.
* De opening brace komt op dezelfde line als de statement en de closing brace komt om een nieuwe lijn.
  ```javascript
  function myFunc() {
    console.log('Hello!');
  };
```
* Gebruik spaties om operators, operands, parameters etc.
* Eindig statements met `;`.
* Gebruik single quotes waar dat nodig is in de syntax.
* Gebruik geen spaties na een statement keyword, function or loop keyword.
* Gebruik een spatie tussen `()` en `{`: `() {`

### Comments
* Gebruik comments voor code dat niet self-documenting is.
* Zet de comments op een nieuwe regel voor de code waar het wat over zegt.

### Variabele namen
* Gebruik lowerCamelCasing.
* Gebruik voor het declareren `let` en `const` niet var.
* Gebruik leesbare semantische namen.

### Operators and comparison
* Ternary operators horen op een line.
* Gebruik altijd strict equality and inequality  
`===` ipv `==` en `!==` ipv `!=`
* Gebruik shortcuts voor Boleans: use `x` and `!x`, not `x === true` and `x === false`.

### Control statements
* Geen spatie tussen control statement keyword en de opening parenthesis.
* Wel een spatie tussen de parenthesis en de opening curly brace.

### Strings
* Gebruik string literals
* Gebruik textContent en niet innerHTML

### Conditionals
* Zorg dat de code zo begrijpelijk mogelijk is bij loops.
* Gebruik `let` om de intitializer de bepalen.
* Geen spatie tussen loop keyword en opening parenthesis.
* Wel spatie tussen parenthesis en opening curly brace.

### Functions and objects
* Gebruik voor de functie namen lowerCamelCasing.
* Bij anonieme functies met een parameter, gebruik een arrow functie voor een kortere en cleanere code.

## Arrays
* Gebruik literals en geen constructors  
``` js
let myArray = [];
```
* Gebruik `push()` om items toe te voegen aan een array
