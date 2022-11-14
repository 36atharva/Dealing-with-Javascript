
// Objects are generally some real world entities!, but in javascript, objects are key value pairs that contain information about certain things.

/* Why to use objects?

-> Any entity which has multiple attributes, or properties can be declared through an object.
-> A single variable can contain many values
-> Ease of access with similar properties stored in a singe variable.

*/  

// Simple identity object that has multiple values.

const identity = { name: "atharva", age: 20, dept: "computer science", rollno: 68 }

// We usually declare objects with const keyword!

// Accessing objects with .(dot) operator

console.log(identity.name, identity.rollno);

// We can store the value of a property inside a variable too!

let a = identity.dept;

console.log(a);

/* 

Let's talk about events:
-> Events are nothing but things that happen inside the HTML DOM, which infact are done by javascript.
-> We can change many things inside the HTML DOM, basically the document model.
-> We can use Javascript to select elements inside the webpage by using various query selectors.
-> Some common events are:
  1. Eventlisteners
  2. onClick functions
  3. onchange
  4. onSubmit etc.
  
*/

// Some example syntax includes:

// let btn = document.querySelector("id of the object");
