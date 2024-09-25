//Modify Objects

const product = {
  ProductName : "Monitor 20 Pulgadas",
  ProductValue : 300,
  ProductAvailable : true
};

console.log(product);


/* // syntax point
console.log(product.ProductValue);
console.log(product.ProductName);
console.log(product.ProductAvailable);
*/

// Adding new properties | nodejs
product.productImage = 'imagen.jpg';

console.log(product);

// Deleting properties 
delete product.ProductAvailable;

console.log(product);