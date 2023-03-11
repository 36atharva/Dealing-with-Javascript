// Let's learn about Javascript Data types :

let length = 5; // number data type
let name = "Atharva"; // string data type
let x = { schoolId: 1, schoolName: "City" }; // object

// data types are dynamic, we change the data type of a variable if we want to.

var a = 5;
console.log(typeof (a)); // prints number
var a = "Atharva";
console.log(typeof (a)); // prints string
var a = 5.5;
console.log(typeof (a)); // prints number again!

// We can define strings with or without double "" quotes, or with '' single quotes as well.

let without = "Atharva";
let withQuotes = 'Atharva';

console.log(typeof (without), typeof (withQuotes)); // prints string both of the times.

let firstNumber = 5;
let secondNumber = 10;

console.log(firstNumber == secondNumber, firstNumber !== secondNumber);

// the operators were discussed in the previous (3) codes, check that out if you don't know what == and === means!

// Arrays are nothing but collections of records, which have the same data types!

const array1 = [1, 2, 3, 4, 5]; // collection of numbers
const students = ["Rohan", "Shubham", "Riya"]; // collection of Names (strings)!

// Objects are basically name-value pairs, where each entity holds a value in the form of attribute!

const identity = { firstName: "Atharva", lastName: "Hinge", mobile: "1111", department: "Computer" };

// Here, the object holds the basic identity of me as a student!