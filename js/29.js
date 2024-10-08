// Iterators - While Loop and Do While Loop

// While Loop - Executes the code first and then prints it

let i = 0;// Index
while (i <= 10) {   // Condition
  console.log(i);  // Output: 0,1,2, ...
  i++; // Increase by 1
}

// While Loop to check even and odd numbers
let n = 0;// Index
while (n <= 100) { // Condition
  if (n % 2 === 0) {
    console.log(`El Número: ${n} Es PAR`); // Ouput: El Número 0 es Par; El numero 2 es par, El ...
  } else {
    console.log(`El Número: ${n} Es Impar`);  // Ouput: El Número 0 es Par; El numero 1 es Impar, El ...
  };
  n++; // Increase by 1
};


// Object array.
const cart = [
  { item: 'Monitor 20 Pulgadas', price: 500 },
  { item: 'Televisión 50 Pulgadas', price:  700 },
  { item: 'Tablet', price: 300 },
  { item: 'Audifonos', price: 200 },
  { item: 'Teclado', price: 50 },
  { item: 'Celular', price: 500 },
  { item: 'Bocinas 20 Pulgadas', price: 300 },
  { item: 'Laptop 20 Pulgadas', price: 800 },
  { item: 'Monitor 24 Pulgadas', price: 600 },
];

let j = 0;
while (j < cart.length) { // Condition

  console.log(cart[j].item); // // Output: Monitor 20 Pulgadas, Televisión 50 Pulgadas, ...

  j++; // Increase 1
};

console.log('==================================================')
// Do While Loop
// Meanwile, Do while Loop first Prints the code and them evaluates
let x = 0;
do {
  console.log(x);   //  Output: 0,1,2, ...
  x++
} while (x <= 10);