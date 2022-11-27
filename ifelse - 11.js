// Let's understand about conditional statements and the basics.

/*
What are conditional statements?
-> We perform a specific operation based on a given condition.
-> We can specify certain condition and execute a particular code block based on it.
-> the if else blocks are used in order to write these statements in Javascript, we will take a look at the working ahead.

*/

// A simple code block where we log the age of the user to the console.

let age = prompt("What is your age?");


if (age < 18) {
  console.log("Your age is less than the required.");
}
else {
  console.log("You can proceed.");
} // will log you can proceed when age >= 18



// We can also use elseif statements to specify more than one conditions.

let time = prompt("What is the time currently?");

if (time<=12) {
    console.log("Good Morning!");
}
else if(time>=12 && time <=16) {
    console.log("Good Afternoon!");
}
else if(time >=16 && time<=20){
    console.log("Good evening");
}
else{
    console.log("Good Night")
}

// This was all about the basics of if else statements, now let's study another concept known as switch statements.

/* What switch statements do?

-> We can specify multiple cases, just like if else, but in a less complicated manner.
-> Performing operations based on a default case becomes easier with the use of switch statements.

*/


// We print the name of the month on the basis of a case:

let a = prompt("What is the number? ");
let a1 = parseInt(a);

switch (a1) {
  case 1:
    console.log("January");
    break;
  case 2:
    console.log("February");
    break;
  case 3:
    console.log("March");
    break;
  case 4:
    console.log("April");
    break;
  case 5:
    console.log("May");
    break;
  case 6:
    console.log("June");
    break;
  case 7:
    console.log("July");
    break;
  case 8:
    console.log("August");
    break;
  case 9:
    console.log("September");
    break;
  case 10:
    console.log("October");
    break;
  case 11:
    console.log("November");
    break;
  case 12:
    console.log("December");
    break;
  default:
    console.log("Specify a number between 1 and 12 only.");
    break;
}