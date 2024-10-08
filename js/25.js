// Arrow Functions.

//Without Arow funtion
const sumNumbers = function (n1, n2) {
  console.log(n1 + n2); //Ouput: 15.
};
sumNumbers( 5, 10 );


//Arrow Functions
const sumNumbers02 = (n1, n2) => console.log(`This is an arrow funtion ${n1 + n2}`); //Ouput: This is an arrow funtion 15.
sumNumbers02( 5, 10 );

// Example #2 
const learning = technology => console.log(`Aprendiendo ${technology}`);// Doesn't necessarily need parentheses either.
learning('JavaScript');

//Example #3
// Creating an array using the Array constructor.
const months = new Array('Enero','Febrero','Marzo','Abril','Mayo','Junio');
//Arrow Funtion
months.forEach( month => {
  if(month === 'Marzo') {
    console.log('Marzo si existe')
  }
});

//Example #4
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
//Arrow Function
itemResult01 = cart.some(product => product.item === 'Tablet');
console.log(itemResult01);// Ouput:true

//Without arrow funtion 
const itemResult02 = cart.some(function(product){
  return product.item === 'Tablet'
});
console.log(itemResult02);//Ouput: true.

//Without Arrow function
const priceResult01 = cart.reduce(function(total, product) {
  return total + product.price
}, 0);
console.log(priceResult01);//total from all prices.

//Arrow Function
priceResult02 = cart.reduce((total, product) => total + product.price, 0);
console.log(`Total del Precio es: ${priceResult02}`);//total from all prices.

// Filter arrow funtion | Nowadays .filter is the most common.
showProduct01 = cart.filter( product => product.price > 400);
console.table(showProduct01);

// Filter without arrow funtion | Nowadays .filter is the most common.
const showProduct02 = cart.filter(function (product) {
  return product.price > 400
});
console.log(showProduct02);

showProduct03 = cart.filter(product => product.item !== 'Celular');
console.table(showProduct03);