# ECMAScript

* EMCAScript 2015-2019
* Backwards
* Interpreted of compiled?

Het ECMAScript standard is een standaard document dat aangeeft op welke manier JavaScript zou moeten werken. Dit zorgt ervoor dat de stukken software die aangeeft JS te supporten ook echt dezelfde taal gebruiken.

## EMCAScript 2015-2019

**TC39** is een commite dat Javascript veranderd en verbeterd. Dit commite bestaat uit 50-100 mensen van bedrijven die zich bezig houden met het web. Ze meeten ongeveer om de maand om hun werk van de afgelopen maanden te bespreken.

### ES Versions
Voor 2015 werden ES specificaties vernoemd naar hun editie. Bv: ES5 dat uitkwam in 2009. Maar na ES6 werd er een jaartal in de naam verwerkt: ES2015.

**ES.Next** geeft aan wat de volgende versie van JS zal zijn.

## Backwards
Een van de principes in JS is **backwards compatibility**. Dit betekend dat als iets is geaccepteerd als valide JS er geen toekomstige verandering is dat deze code invalide maakt. De code uit 1995 zou nog steeds moeten werken.

Hierdoor kunnen developers code schrijven en er zeker van zijn dat hun code niet stop met werken na een nieuwe browser update.

**Foward compatibility** betekend dat een nieuwe toevoeging aan de taal er niet voor zorgt dat het programma niet werk als  het in een oudere JS engine gerunt wordt. JS is dit niet! HTML en CSS zijn dit wel, maar die zijn niet backwards compatible.

### Gaten
Doordat JS niet foward compatible is, zijn er altijd een risico voor potentiele gaten tussen valide JS code.

## Interpreted of compiled?
Veel mensen vinden dat JS een geinterpreteerde taal is. Dit is niet helemaal waar. JS ligt dichterbij een compiled taal. Dit betekend dat de tools een programma eerst processen en verifiëren voordat het uitgevoerd wordt.
