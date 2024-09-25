//objects

const product = {
  productName : "Monitor 20 Pulgadas",
  value : 300,
  available : true
};

// old way
const productValue = product.value;
const productNameOld = product.productName;

console.log(productValue);
console.log(productNameOld);

//Destructuring

const {value, productName} = product;

console.log(value);
console.log(productName);