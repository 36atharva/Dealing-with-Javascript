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