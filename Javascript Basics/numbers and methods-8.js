// Unlike other languages, Javascript has only one type in numbers, and that is Numbers itself!.

/*

-> Write the numbers you want to save with or without decimals, they will be stored as numbers only.
-> you can add numbers, though if you add numbers and strings together, the result will be stored as a string.
-> there are many number methods that can be used to manipulate the results and store them in various ways.

*/

// If you add a number and string, the result is a string:

let a = 10;
let b = "Javascript";
console.log(a + b, typeof (a + b)); // logs string

// Special Case - NaN (not a number) -> this is logged when a number you are trying to log, or expect as an output is not a legal number, let's see:

let aNumber = 10;
let bNumber = "Apple";
console.log(aNumber / bNumber); // logs NaN;

/* What is the BigInt?

-> these are generally used to store numerically bigger integer values.
-> all the operators that are generally used on int are/can be used on BigInt.
-> declaration = Bigint(237455227294);

*/