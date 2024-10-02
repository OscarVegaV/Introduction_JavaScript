// ** Function with parameters and arguments ** 
function sum(number1 = 0, number2 = 0) {   // 'number1' and 'number2' are parameters, with default values of 0.
  console.log(number1 + number2);   // This line adds the parameters and outputs the result.
};
// Calling the function with different arguments (real values)
sum(); // No arguments passed, default values used. Output: 0
sum(3, 3); // Arguments 3 and 3 passed. Output: 6
sum(3, 6); // Arguments 3 and 6 passed. Output: 9
sum(1); // Only one argument passed, 'number2' takes the default value of 0. Output: 1



// Function expressions are NOT hoisted, meaning you can't call them before their definition.
const sum02 = function(n1, n2) {  // 'n1' and 'n2' are parameters. 
  console.log(n1 + n2); // Outputs the sum of 'n1' and 'n2'.
};
sum02(5, 10); // Output: 15
