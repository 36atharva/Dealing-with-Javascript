// Math methods are one of the most important methods with which we can create different functions and also manipulate the DOM.

/* 
We are going to take a look at some common math functions and understand their implementation:

1. Math.round(x): rounds the number to the nearest integer.
2. Math.pow(x,y): returns the value of x raise to the power y.
3. Math.min(): takes several parameters and returns the minimum value.
4. Math.max(): same as min() but returns the maximum value.
5. Math.random(): return a random number between 0 and 1.

*/

// 1. Math.round():

let a = 5.778;
console.log(Math.round(a)); // logs 6

// 2. Math.pow(x,y):

let x = 10;
let y = 4;

console.log(Math.pow(x, y)); // logs 10000

// 3. Math.min():

console.log(Math.min(1, 2, 3, 4, 0, 55, 62)); // logs 0

// 4. Math.max():

console.log(Math.max(1, 5, 7, 22, 45, 51, 48)); // logs 51

// 5. Math.random():

console.log(Math.random());

/*Note - generally Math.floor is used with math.random in order to generate a random integer value:*/

console.log(Math.floor(Math.random() * 6)) //  generates a random number between 0 and 6