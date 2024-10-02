//**Functions

// Declaration of a function  | declaracion de la funcion 
//Create a function called sum
function sum( ) {
  console.log(10 + 10);
};
// Call the function sum
sum();//Ouput: 20

// Function expressions
const sum02 = function ( ) {
  console.log(5 + 5);
};
// Call the function sum02
sum02(); // Output: 10

// This is the 3rd form known as an **IIFE (Immediately Invoked Function Expression)**
// It does not need to be called explicitly | Common in jQuery

(function(){
  console.log('This is a function');
})(); // The last parentheses invoke the function immediately
