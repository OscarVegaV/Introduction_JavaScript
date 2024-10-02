//**Differences between Functions and Hoisting**

// Hoisting: In JavaScript, function declarations are hoisted, 
// which means they can be called before being declared in the code.

// Function declaration (hoisting applies)
sum(); // Output: 20 - This works because the function declaration is hoisted.
function sum() {
  console.log(10 + 10);
}

// Function expressions are NOT hoisted
// sum02(); // Output: Error - This throws an error because the function expression is not hoisted.
const sum02 = function() {
  console.log(5 + 5);
};
