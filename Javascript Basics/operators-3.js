console.log("Hello to day 3!");

let x = 10;
let y = 5;

// Basic Arithmetic operators -

let z = x + y;
let a = x * y;
let b = x / y;
let c = x - y;

console.log(z, a, b, c);

// Adding Strings using operators - 

let firstString = "Hello";
let secondString = "Javascript!";

let resultString = firstString + " " + secondString;

console.log(resultString);

// Adding Strings and Numbers - 

let numberVar = 5;
let numberString = "5" + numberVar;
let string = "Hello" + 5;

console.log(numberString, string);

// After logging this to console, notice how integer got converted to a string datatype and returned a string on the result.

// In the console - 55, Hello5!


/* All the comparison operators - 

== -> equal to
=== -> checks equal to value, and also type!
!= -> not equal to
!== -> not equal to and not equal type.
>,< -> greater than and less than.


Logical operators -
&& -> and operator
|| -> or operator
! -> logical not
*/

// Let's play around with assignment operators!

var firstVariable = 5;
var secondVariable = 5;

firstVariable += secondVariable;
console.log(firstVariable);

firstVariable -= secondVariable;
console.log(firstVariable);

firstVariable *= secondVariable;
console.log(firstVariable);

firstVariable /= secondVariable;
console.log(firstVariable);

// Try this out in your own ide, or use any online editor!

// Operators are very helpful in storing result of multiple variables, we will use this in many more upcoming functions, methods and even in the DOM!