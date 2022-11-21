// Arrays are nothing but containers used to store similar type of variables.

const array1 = [1, 2, 3, 4, 5]; // an array which stores numbers from 1 to 5.

/*******Note************/
// Array indexes start from [0]

/*

Why to use arrays?

-> if you wanted to store 3 values, you will need 3 different variables for the same, but an array can store them all in a single container.
-> arrays can be used with multiple methods, and various operations to manipulate the content inside them.
-> we generally declare arrays with the const keyword.

*/


// How to access array elements?: array indexes start from 0 till length - 1.

const array2 = ["javascript", "html", "css", "python"];

console.log(array2[0], array2[1], array2[2], array2[3]);

// let's change the element.

array2[0] = "not javascript";
console.log(array2[0]); // logs not javascript.

/* Array methods:

1. push(): inserts a element into the array.
2. pop(): removes the last element from the array.
3. length(): returns the total length of the array.
4. delete(): deletes the specified index element.
5. slice(): slices a part of the array and creates a new array.
6. toString(): returns a string from the array.

These are the basic array methods that you need to know in order to get started, there are a lot many that are a bit advanced, but we will learn them along the way.

*/

// 1. push()

let arrayM = [1, 2, 3, 4, 5];
arrayM.push(6);
console.log(arrayM); // logs the array.

// 2. pop()

arrayM.pop();
console.log(arrayM);

// 3. length()

console.log(arrayM.length); // logs 5

// 4. delete()

delete arrayM[2];
console.log(arrayM); // deletes the 3rd element from the array, as index starts from *0*.

// 5. slice()

arrayM.slice(1); // removes 2 from the array 
console.log(arrayM);

// 6. toString()

console.log(arrayM.toString()); // 1,2,4,5;


// This was all about arrays in this guide, there are some sorting methods to learn in the arrays domain, but I wil make a different codebase in order to learn it.