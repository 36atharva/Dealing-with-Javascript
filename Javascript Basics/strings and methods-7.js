const { abort } = require("process");
const { start } = require("repl");

// Strings are nothing but sequence of characters:
// characters in Atharva -> A,t,h,a,r,v,a
// let's make a name out of it!

let firstString = "Atharva";
let secondString = 'Atharva';

// can use both single and double quotes.

// Strings are used everywhere, when we want to change, or even add text content to our webpages inside Javascript.


// How to get the length of a string?

// -> use the string.length() method

let a = "Length";

console.log(a.length); // logs 6.

/* The string methods

There are many string methods used in javascript, but most important ones of them are:
1. length()
2. slice()
3. substring()
4. replace()
5. trim()
6. trimStart()
7. charAt()
8. toUpperCase()
9. toLowerCase()

*/

// 1. length(): get the length of the string.

let string = "Atharva";
console.log(string.length);

// 2.slice(): takes 2 parameters, extracts the part of the string returns it.

let sliceString = "My name is unknown";
console.log(sliceString.slice(3, 7)) // will log name

let x = "Atharva, age 20";
console.log(x.slice(9, 12)); // logs age

// 3. substring(): same as the slice method, but 0 index values are treated differently

// 4. replace(): replaces the first paramater given with the second paramter. let's try it out!

let aString = "Hello my name is Atharva!";
console.log(aString.replace("Atharva", "Alex"));

// logs alex instead of Atharva!

// 5. trim(): does the simple job of removing whitespace from a string.

let bString = "     Atharva         ";
console.log(bString.trim()); // "Atharva"

// 6. trimStart(): similar to trim, but removes whitespace only from the start

let trimString = "        Atharva        whitespace   ";
console.log(trimString.trimStart())

// 7. charAt(): searches for the character on the position that you specify.

let charString = "Atharva";
console.log(charString.charAt(3)); // logs a

// 8. toUpperCase(): converts the string to uppercase.
// 9. toLowerCase(): converts the string to lowercase.

let upperCaseString = "AthArVa";
console.log(upperCaseString.toUpperCase());
console.log(upperCaseString.toLowerCase());


// These were some basic string methods that you will use in many programs and functions, and if I missed something, google is there for us, always :p. 