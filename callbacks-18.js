/* We are nearing the end of our Javascript Series, in this snippet, let's take a look at Callback functions in Javascript and why are they used.

What are Callback functions?
- A Callback function is simply a function passed to another function as an argument.

Let's define 2 functions and see which one logs to the console:

*/

let a;
let b;

function display(a) {
  b = a;
  console.log("hello");
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

// This logs 5 and then 10, what we understand from this is that javascript functions are executed by the sequence we call them, here it does not matter if we define the second function before first or vice versa

/*

*** IMPORTANT NOTE ***
When you call a function in some another function's parameters, do not use the parenthesis
Example:

myFunction(){
  some work
}

myOtherFunction(a,b,myFunction) Correct way
myOtherFunction(a,b,myFunction()) Wrong way

We mostly use Callback functions in Asynchronous functionalities, like async/await.

These topics will be covered in Advanced Javascript Section 0.0

*/
