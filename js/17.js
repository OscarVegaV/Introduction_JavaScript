//Arrays Methods
const numbers = [10,20,30,40,50];
console.table(numbers);// Displays the array in table format

//.push() adds multiple values at the end of the array
numbers.push(60,70,80);

// .unshift adds multiple values at the beginning of the array
numbers.unshift(-10,-20,-30);

console.table(numbers);// Updated table with new values at the beginning and end


// Creating an array using the Array constructor
const month = new Array('Enero','Febrero','Marzo','Abril','Mayo','Junio');

// .pop removes the last element of the array
month.pop();

// .shift removes the first element of the array
month.shift();

console.table(month);// Displays the modified array in table format

// Creating an array using the Array constructor
const userName = new Array('Julio','Alvaro','Stephanie','Oscar','Nancy','Dennis');

// .splice removes specific elements by their position
// .splice(#position of the element to delete, #number of elements to delete)
userName.splice(2, 3);

console.log(userName); // Output: ['Julio','Alvaro','Dennis']

// These methods (push, pop, shift, unshift, splice) modify the original array, which can lead to unintended side effects. It's often better to use immutability when possible.



// Rest Operator or Spread Operator | Best Practice for immutability
const animals = new Array('Gato','Perro','Pajaro');

// Spread operator creates a new array, avoiding mutations
const newArray = [...animals,'Pez','Serpiente']; // Adds new elements without modifying the original array

console.log(newArray);// Output: ['Gato', 'Perro', 'Pajaro', 'Pez', 'Serpiente']
