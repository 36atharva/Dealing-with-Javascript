/*
In Javascript, you can use 3 types of scopes to control the behavior of variables.

1. Block scope
2. function scope
3. global scope

We will talk about these scopes in detail in this module.

If you haven't checked out the let,var and const module, do check them out yourself, as I have covered some basics in there.

*/

// Block scope:

{
  let name = "Atharva";
}
console.log(name); // it will log an error, here the name variable is scoped inside the curly braces, it can't be accessed outside the curly braces.

// function scope:

function myFunction() {
  let myAge = 20;
  return myAge;
}

console.log(myAge); // it will log an error, here the myAge variable is scoped inside the myFunction function, it can't be accessed outside it.

// Global scope: these variables can be used anywhere in the program, not just inside any function or block.

var a = 5;
var b = 10;

function myFunction1(a, b) {
  return a + b;
}

console.log(myFunction1(a, b)); // logs 15

/* This was all about the variables scope in JavaScript, we will learn many things about the scoping patterns and how to use it to our advantage, further in the upcoming code snippets. */

/* What is hoisting in JS?

-> in javascript, we can use a variable even before it has been used o.o, this is the speciality of Javascript.
-> this is only possible in the case of 'var' keyword, when we try to use a variable which has not been declared yet in the case of 'let' and 'const', we get a ReferenceError.
Example is given below:

*/

a = 1;
b = 2;

console.log(a + b); // logs 2

var a;
var b;

// But in the case of 'let' and 'const':

x = 10;
let x; // run this in your ide or chrome devtools, you will get a referenceerror!

/* Best practices?

I will suggest you to declare any variables that you are going to use in your code, declare them at the top!
This also improves readability of your code and helps to avoid errors when running.

In the next snippet, we will be discussing about this keyword, which is one of the most important concepts in JavaScript.
Till then, keep practicing!

*/
