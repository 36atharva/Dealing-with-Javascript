// Let's discuss about Javascript declaring a variable - 

// There are 3 ways to declare a variable, namely:
// var
// let
// const

// The var keyword is not used much in modern javascript and the usage of let and const has increased drastically after ES6. Let's declare some variables -

var a = 5;
let b = 6;
const c = 7;

// The var keyword is used in all JavaScript code from 1995 to 2015.

// The let and const keywords were added to JavaScript in 2015.

// var declares a globally scoped variable;
// let declares a block scoped variable;
// const declares a constant variable;

// Let's try to change the value of 'c' -

// const c = 8;
// The console will give an error! 

// Let's play around the variables a bit and store the calculations in a different variable:

let value = a + b;
console.log(value);

// It will log 11 to the console!

// Javascript Operators - 

/* + -> the addition operator
   - -> the subtraction operator
   * -> the multiplication operator
   / -> the division operator.
*/
var valueOne = a + b;
var valueTwo = a * b;
var valueThree = a / b;
var valueFour = a - b;



console.log(valueOne, valueTwo, valueThree, valueFour);

// Modern JS encourages us to use let and const more rather than var to ensure block scoping and we don't change the values of variables in the predefined scope.


/* That's all for the introduction to variables and operators (basic) in javascript, play around with the code and try to make some changes in order to make sure you don't forget what you learnt! 

Happy Learning!!!

*/