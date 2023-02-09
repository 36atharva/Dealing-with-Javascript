// Let's discuss about 'this' keyword in JavaScript, let's first see it through an example readily!

// Example 1:

const student_1 = {
  firstName: "Atharva",
  lastName: "Hinge",
  id: 1,
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};

// What will it return? : Atharva Hinge. When we called the function where this keyword was contained, it referred to the object we are currently operating on.

// Example 2:

const student_2 = {
  firstName: "Atharva",
  lastName: "Hinge",
  id: 1,
  myFunction: function() {
    return this;
  }
};

// Here, this returns the object itself, we are not using the properties here, we are just accessing the object!


/* Understanding this keyword can be confusing, here is a quick overview of what this refers to when we call it in different situations:

1. In a particular object method, this refers to the object. (Example 2)
2. Without any reference, this refers to the global object. (The global object window)
3. When defined in a function, this refers to the global object. (Example 1 where we returned the full name)
4. In a function, in strict mode, this is undefined. (When we use this keyword in strict mode inside function)
5. In an event, this refers to the element that received the event. (HTML events and listeners)

*/
