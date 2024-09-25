//Arrays definition
const numbers = [10,20,30,40,50,60];

console.log(numbers);//Output: [10, 20, 30, 40, 50, 60]

console.table(numbers);// Displays the array in table format

// Creating an array using the Array constructor
const month = new Array('Enero','Febrero','Marzo','Abril','Mayo','Junio');

console.log(month);// Output: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio']

console.table(month);//Displays the array in table format

// Checking the length of the array
console.log(month.length);//Output:6

// Arrays can contain numbers, strings, objects, booleans, and even other arrays
const mixedArray = ['Hola', 10, true, 'si', null, {userName:'Oscar', job:'Desarrollador'}, [1,2,3]];

console.log(mixedArray);//(7) ['Hola', 10, true, 'si', null, {…}, Array(3)]

// Accessing values from the 'numbers' array by index
console.log(numbers[4]);// Output: 50
console.log(numbers[2]);// Output: 30
console.log(numbers[5]);// Output: 60
console.log(numbers[200]);// Output: Undefined

// Iterating over the 'numbers' array using forEach
numbers.forEach(function(number) {
  console.log(number)});

