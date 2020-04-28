# Values

* Numbers
* Arithmetic
* Special numbers
* Strings
* Unary operators
* Boolean values
* Logische operators
* Empty values
* Automatic type conversion


Een moderne computer heeft meer dan 30 miljard bits aan werkgeheugen. Om met zoveel bits te werken zonder in de war te raken moeten we ze verdelen in stukken informatie. In JS worden deze stukken values genoemd. Alle values zijn gemaakt van bits, maar ze hebben verschillende rollen. Het type van de value bepaald deze rol.  
Om een value te maken moet je zijn naam aanroepen.

## Numbers
De value van numbers zijn getallen, bv: `12`. Een gebroken getal geef je aan met een `.`: `12.2`. Voor hele grote of kleine getallen gebruik je `e` met daarna de exponent van het getal: `2.988ee8` (299.800.000).

## Arithmetic
Met getallen kan je rekenen. Met twee getallen wordt een nieuw getal gemaakt. Hiervoor gebruik je operators. `+` voor optellen, `-` voor aftrekken, `*` voor vermenigvuldigen en `/` voor delen. Net als wiskunde wordt er in een som eerst vermenigvuldigt en gedeelt en daarna pas opgetelt en afgetrokken. Deze volgorde kan aangepas worden met: `()`. `%` wordt gebruikt om de rest van een deelsom aan te geven: `314%100` geeft 14 en `144%12` geeft 0.

## Special Numbers
Er zijn drie speciale values in JS die beschouwd worden als nummers maar zich niet zo gedragen.
* `Infinity`: *Infinity*-1 is nog steeds *Infinity*
* `- Infinity` : negative infinity.
* `NaN`: Not a number. Dit is een resultaat  van 0/0 en Infinity - Infinity of andere rekensommen die geen logisch resultaat opleveren.

## Strings
Strings zijn tekst en worden weergeven in haakjes: `'tekst'` `"tekst"` *\`tekst\`*. Bijna alles kan tussen deze haakjes staan en JS zal er een string value van maken. Newlines kunnen zonder te escapen gebruikt worden als je de backtics gebruikt. Andere karakters die niet werken kunnen escaped worden met \ :
* `\t` = tab  
* `\n` = new line
* `\\` = \

String values kunnen niet afgetrokken, vermenigvuldigt of gedeelt worden. Wel kunnen ze bij elkaar opgetelt worden:
`'te'+'st'` geeft test.   
Getallen tussen `{}` in een string worden uitgerekent en het getal wat daaruit komt wordt in de string geimplementeerd: `{100/2}` wordt dan 50.

## Unary operators
Niet alle operators zijn symbolen. Sommige worden geschreven als woorden:
* `typeof` geeft a string value van de type van de value: `console.log(typeof 4.5)` geeft `number` als resultaat.

## Boolean values
Dit type heeft maar twee waardes:
* `true`
* `false`

### Vergelijkingen
Boleans zijn resultaten van vegelijkingen:       
* `console.log(3>2)` geeft *true*
* `console.log(3<2)` geeft *false*  

Strings kunnen ook zo vergeleken worden: `console.log('Aap' < 'Varken')` geeft *true*. Deze ordening is alfabetisch. En Hoofdletters zijn altijd minder dan lowercase, dus Z < a.  

Operators voor vegelijkingen zijn:
* `\>` groter dan
* `<` kleiner dan
* `\>=` groter of gelijk
* `<=` kleiner of gelijk
* `==` gelijk aan
* `!=` niet gelijk aan

Er is maar een waarde dat niet gelijk is aan zichzelf in JS en dat is `NaN`.

## Logische oprators
Er zijn drie logische operators:
* `&&`, 'en': `console.log(true && false)` geeft false. `console.log(true && true)` geeft true
* `||`, 'of': `console.log(false || true)` geeft true. `console.log(false && false)` geeft false
* `!`, 'niet': *!true* geeft false. *!false* geeft true.

## Empty Values
Er zijn twee speciale values: `null` en `undefined`. Deze geven aan dat er geen belangrijke waarde aanwezig is. Ze zijn zelf values maar bevatten geen informatie.

## Automatic type conversion
Als er een operator wordt toegepast op een verkeerde value, zal JS die value converteren naar het type dat het nodig heeft doormiddel van een set regels. Dit heet **type coercion**.

`console.log(8 * null)` geeft 0  
De *null* wordt omgezet naar een 0  
`console.log("5 - 1")` geeft 4  
De *"5"* wordt omgezet naar een 5  
`console.log("5" + 1)` geeft 51  
De *1* wordt omgezet naar een "1" (string concatenation)
`console.log("five" * 2)`  geeft NaN  
De *five* wordt niet gezien als een duidelijk number, dus wordt het omgezet naar NaN.  
`console.log(false == 0)`  geeft true.
== geeft true als allebei de values hetzelfde zijn. Behalve bij Nan. Maar als je wil dat ook de types hezelfde zijn moet je === gebruiken.


### Conversion logical operators
`&&` en `||` zullen de value aan de linker kant converteren naar Boolean om te bepalen wat ze gaan doen.
