// Arrow functions were newly introduced in ES6, the main use of arrow functions is to shorten the syntax of regular functions and refactor it.

// Example 1:

let addition = (a,b) => a + b;

console.log(addition(1,2)) // logs 3!

// Let's write the same function in the normal way:

let additionFunc(a,b){
  return a + b;
}

/* Things to remember:

-> Arrow functions return values by default.
-> You can pass the parameters inside ()
-> This is a concept to know before moving on to React.
-> Never use Arrow functions as methods, they don't have their own bindings

*/

// Example 2:

// Traditional anonymous function
function (a, b) {
  return a + b;
});

// Arrow function
(a, b) => a + b;

const a = 4;
const b = 2;

// Traditional anonymous function (no parameters)
(function () {
  return a + b;
});

// Arrow function (no arguments)
() => a + b;

// This is what we can refactor normal functions to!

