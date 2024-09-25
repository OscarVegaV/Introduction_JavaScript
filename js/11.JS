//OBJECTS

const productName = "Monitor 20 Pulgadas";
const value = 300;
const available = true;

console.log(productName,value,available);


// another way
const product = {
  productName : "Monitor 20 Pulgadas",
  value : 300,
  available : true
};

console.log(product);

// syntax point

console.log(product.value);
console.log(product.productName);
console.log(product.available);


// another syntax
console.log(product["value"]);