//Modify Objects

const product = {
  productName : "Monitor 20 Pulgadas",
  value : 300,
 available : true
};

console.log(product);


/* // syntax point
console.log(product.value);
console.log(product.ProductName);
console.log(product.available);
*/

// Adding new properties | nodejs
product.image = 'imagen.jpg';

console.log(product);

// Deleting properties 
delete product.available;

console.log(product);