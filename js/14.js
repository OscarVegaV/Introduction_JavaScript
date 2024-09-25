/*"use strict"; //running JavaScript in  strict mode */

//Object definition 
const product = {
  productName : "Monitor 20 Pulgadas",
  value : 300,
  available : true
};

//object methods
Object.freeze(product); // Cannot add, delete, or change modify properties
Object.seal(product); // Cannot add or delete properties, but you can modify existing ones

// This line will fail because the object is frozen/sealed
product.image = 'imagen.jpg';


// Check if the object is frozen (returns true/false)
console.log(Object.isFrozen(product));

console.log(product);