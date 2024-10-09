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

//      ** ForEach **
// Use only with Arrays | It can be used to iterate over elements and display them in the console or render them in HTML


//Without Arrow funtion
cart.forEach( function (cartProducts) {
  console.log(cartProducts.item);
});

//With Arrow funtion 
cart.forEach( cartProducts => console.log(`Producto: ${cartProducts.item}`));

//     ** Map **
// Used to create a new array

// Map with Arrow function | The syntax is very similar to ForEach
cart.map( cartProducts02 => console.log(`Producto: ${cartProducts02.item} - ${cartProducts02.price}`));

const cartProducts02 = cart.map( prod => `${prod.item} - ${prod.price}`);
console.log(cartProducts02);