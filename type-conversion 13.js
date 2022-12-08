/*
Type conversion is an important functionality which javascript allows us to do!

-> integer to string
-> string to integer etc.

There are 4 primitive data types in Javascript namely:
~ string
~ number
~ boolean
~ object

*/

// Checking the type of data:

let a = 12;
let b = "atharva";
let c = "a";
let arr = [1, 2, 3, 4];

console.log(typeof a); // logs number
console.log(typeof b); // logs string
console.log(typeof c); // logs string even when only 1 character!
console.log(typeof arr); // logs object (there is no such type as array, array is a type of object itself)

// Undefined data types :

let myName;
console.log(typeof myName); //  logs undefined

// Type conversion

//1. Number() method-

let x = "11";
let y = Number(x);

console.log(typeof x, typeof y); //  logs string and number

// 2. parseFloat() method-

let x1 = "3.14"; // pi
let y1 = parseFloat(x1);

console.log(typeof x1, typeof y1); //  logs string and number again.

// 3. parseInt() method-

let x2 = "Atharva";
let y2 = parseInt(x1);

console.log(typeof x1, typeof y1); //  logs string and number again :).
