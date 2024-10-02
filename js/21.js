//**Differences between Function and Method**

const number01 = 20;
const number02 = '20'; 

//** function parseInt() **
// parseInt is a built-in function that converts a string to a number
console.log(parseInt(number02));  // Converts '20' (string) to 20 (number)

//** Method .toString() **
// .toString() is a method that converts a number to a string
console.log(number01.toString());// Converts 20 (number) to '20' (string)