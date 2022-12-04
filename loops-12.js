// Let's learn about Loops in Javascript and why they are used?

// Sample loop (print 1 to 10):

for (let i = 1; i <= 10; i++) {
  console.log(i + " "); // logs 1 to 10.
}

/* Why do we need Loops?

-> Wanting to run a sequence of code over and over can become lengthy.
-> We can specify certain conditions and run a loop to print, or execute a statement.
-> Loops are very important as a concept, even in DSA loops are used often.

*/

// 1. for loop:

for (let i = 1; i <= 10; i++) {
  console.log(i); // logs number 1 to 10.
}

// 2. forin loop: loops through the properties of the specified object.

const obj1 = {
  firstName: "Atharva",
  lastName: "Hinge",
  age: 25,
};

let info = "";

for (let a in obj1) {
  text += obj1[a];
}
console.log(text);
