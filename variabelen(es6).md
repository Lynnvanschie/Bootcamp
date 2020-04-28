# Variabelen

Door `})();` de twee laatste haakjes na een functie de zetten roep je deze meteen aan. Dit heet **immediately Invoked Function Expression (IIFE)**.

JS variabelen zijn **hoisted** dit betekent dat ze naar de bovenkant van de code of functie gesleept worden. Er wordt bij het runnen van de code altijd eerst naar de variabelen gekeken: deze worden dus naar boven in de code gehaald.   
Als er geen variabele in de functie staat zet de JS interpreter deze bovenaan de code en dus boven de functies waardoor de scope van de variabele global is. Als je dit doet terwijl je de `'use strict'` dedecaleerd hebt gebeurd dit niet en krijg je een error.

De variabele `let` doet dit niet. Dit komt omdat `let` met een 'block scope' werkt. Dit zorgt ervoor dat de variabele alleen toegankelijk is in een code block en niet voor de rest van de code.


De variabele `const` is net als let. Alleen kan je geen nieuwe waarde aan const geven. De waarde van let kan je overschrijven in een nieuwe regel code. Dit kan dus niet met const.

Gebruik `const` als je de variabelen  niet veranderd en `let` in de andere gevallen. Door `const` te gebruiken als de waarde niet veranderd krijg je **minimize mutable state.** Dit houdt in dat de kans dat de variabele per ongeluk veranderd en het programma kapot maakt kleiner is als je `const` gebruikt.
