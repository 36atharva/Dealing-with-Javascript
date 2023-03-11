/* We are nearing the end of our Javascript Series, in this snippet, let's take a look at Callback functions in Javascript and why are they used.

What are Callback functions?
- A Callback function is simply a function passed to another function as an argument.

Let's define 2 functions and see which one logs to the console:

*/

let a;
let b;

function display(a) {
  b = a;
}

function first() {
  display(5);
}

function second() {
  display(10);
}

first();
second();
display();

console.log(b);
