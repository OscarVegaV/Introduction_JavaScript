//Iterators
//For Loops
for (let i = 0; i <= 10; i++) {
  console.log(i);  // Output: 0,1,2, ...
};
//
console.log('\n ==========================================')
//odd
for (let i = 1; i <= 100; i+=2) {
  console.log(`Número: ${i}`);  // Output: Número: 1, 3, 5, ...
};
//odd#2
for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log( `El Número ${i} es Par`);// Ouput: El Número 0 es Par; El numero 2 es par, El ...
  } else {
    console.log( `El Número ${i} es Impar`);// Ouput: El Número 0 es Par; El numero 1 es Impar, El ...
  };  
}

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
//iterate into the object array
for (let i = 0; i < cart.length; i++) {
  //const element = array[i];
  console.log(cart[i].item) // Output: Monitor 20 Pulgadas, Televisión 50 Pulgadas, ...
  
}
