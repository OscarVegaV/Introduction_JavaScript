//OBJECTS

const ProductName = "Monitor 20 Pulgadas";
const ProductValue = 300;
const Productavailable = true;

console.log(ProductName,ProductValue,Productavailable);


// another way
const product = {
  ProductName : "Monitor 20 Pulgadas",
  ProductValue : 300,
  ProductAvailable : true
};

console.log(product);

// syntax point

console.log(product.ProductValue);
console.log(product.ProductName);
console.log(product.ProductAvailable);


// another syntax
console.log(product["ProductValue"]);