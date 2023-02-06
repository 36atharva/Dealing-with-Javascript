// Let's talk about something called as "Strict Mode", what exactly is it?


// Strict mode was introduced in ES5, it is exactly what you think it will be! How? Let me explain:

/* Keyword*/
"use strict";

/*
What does the keyword do?
  -> prevents you from using undeclared variables
  -> Write cleaner code
  -> can throw errors if some wrong occurences are found

Why to use Strict mode?
  -> Makes you write cleaner and correct code in     
Javascript.
  -> Previously declared functions cannot be deleted, leading to more secure code
  -> Global variables are not created without declaring, again securing the integrity of the code.

  Let's clear the concept of strict mode using some examples, this code snippet and module will be very short.

  But covering strict mode is an important part too.
*/

// Example 1:

a = 3;
console.log(a); // will throw an error (a is not defined)

// Example 2:

function x(a) {
  return a + 1;
}

console.log(x(a)); // throws an error.
