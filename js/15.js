//// Object definition for a product with basic properties
 

const product = {
  productName : "Monitor 20 Pulgadas",
  price : 300,
  available : true
};
// Define measurement object
const measurement = {
  weight: '1 kg',
  height: '1 m'
};

// Merge product and measurement objects using Spread Operator
const combinedProduct = {...product,...measurement};

console.log(combinedProduct);