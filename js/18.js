//Array Methods
// Creating an array using the Array constructor
const months = new Array('Enero','Febrero','Marzo','Abril','Mayo','Junio');

//forEach to check if a specific month exists

months.forEach(function(month) {
  if(month === 'Marzo') {
    console.log('Marzo si existe');
  }
  });

//"The includes method is similar to forEach but doesn't work well with arrays of objects."
const monthResult01 = months.includes('Marzo');
const monthResult02 = months.includes('Diciembre');
console.log('Marzo si existe');
console.log(monthResult01);//true
console.log(monthResult02);//False

// Object array
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
console.table(cart);

//"// The some method works similarly to includes but is better suited for arrays of objects."

//Without arrow funtion 
const itemResult01 = cart.some(function(product){
  return product.item === 'Tablet'
});
console.log(itemResult01);//true

// Using arrow function to check if 'Celular Pro' exists in the cart
const itemResult02 = cart.some(product => product.item === 'Celular Pro');
console.log(itemResult02);//False

//Summing up all prices in the cart

//Reduce without Arrow funtion
const priceResult01 = cart.reduce(function(total, product) {
  return total + product.price
}, 0);
console.log(priceResult01);//total from all prices

//Reduce with Arrow funtion 
const priceResult02 = cart.reduce((total, product) => total + product.price, 0);
console.log(priceResult02); // show us total from all prices


// Filter without arrow funtion | Nowadays .filter is the most common
const showProduct01 = cart.filter(function (product) {
  return product.price > 400
});
console.table(showProduct01);

const showProduct02 = cart.filter(product => product.price > 400 );
console.table(showProduct02);

const showProduct03 = cart.filter(product => product.item !== 'Celular');
console.log(showProduct03);

