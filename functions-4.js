/* Functions are nothing but some block of statements that are defined once, but can be executed multiple number of times */

// defined with function keyword : 

/*

function myfunction(parameter1, parameter 2){
return something;
}

*/

// Basic arithmetic functions:

function multiply(a, b) {  // takes 2 parameters, a and b, and returns the multiplication.
    return a * b;
  }
  function divide(a, b) {  // takes 2 parameters, a and b, and returns the division.
    return a / b;
  }
  function add(a, b) {     // takes 2 parameters, a and b, and returns the addition.
    return a + b;
  }
  function subtract(a, b) {  // takes 2 parameters, a and b, and returns the subtraction.
    return a - b;
  }
  
  // How to invoke a function :
  
  let var1 = add(1, 2);
  let var2 = subtract(3, 2);
  let var3 = multiply(2, 3);
  let var4 = divide(4, 2);
  
  console.log(var1, var2, var3, var4); // print all the results on console.                                            invocation.
  
  /* Why to use Funcions in your code?
  
  -> Increases reusability of code, don't write the same set of statements again and again!
  -> define the statements and specific functionality once and use it many time in your code!
  -> increases readability of your code.
  
  */
  
  // using let in functions-
  
  var a;
  
  function milesToKm(a) {
    let kilometers = a * 1.6;
    return kilometers;
  }
  
  // Here the kilometers variable is locally scoped, you can't use this variable outside of the function!
  
  // Let's see -
  
  let miles = kilometers / 1.6 // gives an error :)
  
  // We will take a closer look at how functions execute and are properly used in the coming topics.