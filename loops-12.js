// Let's learn about Loops in Javascript and why they are used?

// Sample loop (print 1 to 10):

// for (let i = 1; i <= 10; i++) {
//   console.log(i + " "); // logs 1 to 10.
// }

/* Why do we need Loops?

-> Wanting to run a sequence of code over and over can become lengthy.
-> We can specify certain conditions and run a loop to print, or execute a statement.
-> Loops are very important as a concept, even in DSA loops are used often.

*/

// 1. for loop:

// for (let i = 1; i <= 10; i++) {
//   console.log(i); // logs number 1 to 10.
// }

// 2. forin loop: loops through the properties of the specified object.

// const obj1 = {
//   firstName: "Atharva",
//   lastName: "Hinge",
//   age: 25,
// };

// let info = "";

// for (let a in obj1) {
//   info += obj1[a] + " ";
// }
// console.log(info); //  logs Atharva Hinge 25.

// 3. while loops: let's print Hello user 1,2,3... with while loop

let i = 1;

while (i <= 10) {
  console.log("Hello user " + i); //  logs Hello User 1.2.3..4....
  i++;
}

// 4. forof() loop: same as forin but it also iterates over other data structures like array, string etc.

const device = ["phone", "laptop", "telephone", "machine"];
let myText = "";

for (let i of device) {
  myText += i + " ";
  console.log(myText); // logs phone laptop telephone machine.
}

/* These were some important types of loops that are used in numerous websites, programs or different functionalities */
