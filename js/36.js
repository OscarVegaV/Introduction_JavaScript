// Try-Catch

// Try-catch is used to handle specific errors in code execution
// It should be used in places where errors are expected or need to be caught gracefully

const numb01 = 20;
const numb03 = 30;

console.log(numb01);

// This will throw an error because numb02 is not defined
try {
  console.log(numb02); // numb02 does not exist, so this throws a ReferenceError
} catch (error) {
  console.log('An error occurred:', error.message); // Catch the error and print the message
}

console.log(numb03);
