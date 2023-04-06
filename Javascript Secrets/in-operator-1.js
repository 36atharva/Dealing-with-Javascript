const student = { name: "A", id: 1, yearOfBirth: 2000 };

console.log("name" in student); // logs true because the property name is present in Student

/* The syntax is pretty straight forward:

'prop' in 'object_name
-> It is also known as branded check, to ensure if a property is defined in a particular object or not.
*/

// Let's delete the property and see what it returns:

delete student.name;

console.log("name" in student); // it will log false now.

/*Where and what are the use cases of in operator?

-> You can use the in operator for basic form validation in React states (if you are unfamiliar with React, don't worry about it much).
-> To check if a property is defined in a specific object or not.
-> Reading private properties of classes.

*/
