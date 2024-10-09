// Object-Oriented Programming (OOP)
//    ** Object Constructor & Object Literal

//   ** Object Literal  ** 
const product = {
  itemName: 'Tablet',
  price: 500,
};

//  ** Object Constructor **

function ProductFeatures (itemName, price, brand) {   //(): parameters function ProductFeatures(itemName, price, brand) {    // Parameters: itemName, price, brand
 
  this.itemName = itemName;
  this.brand = brand;
  this.price = price; // Ensure both parameters are assigned to the object
};
const products02 = new ProductFeatures('Monitor Curvo de 49"', 800, 'LG');//  (): arguments
const products03 = new ProductFeatures('Laptop 15"', 600, 'Lenovo'); //  (): arguments | Arguments: itemName, price, brand
const products04 = new ProductFeatures('Celular', 1000, 'Nokia');   //  (): arguments | Arguments: itemName, price, brand
const products05 = new ProductFeatures('Camara', 500, 'Xiaomi');    //  (): arguments | Arguments: itemName, price, brand

console.log(products02);
console.log(products03);
console.log(products04);
console.log(products05);