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
