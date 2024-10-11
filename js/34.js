//      **Class**  instead of old version (prototype)

// ** Class Declaration for Product Features **
class ProductFeatures {

  //        Constructor method initializes the properties of the class
  constructor(itemName, price) {             
    this.itemName = itemName;     // Assigns itemName to the instance
    this.price = price;           // Assigns price to the instance
  }

  // **Method**  to format product information
  productFormat() {
    return `El Producto: ${this.itemName} tiene un precio de: ${this.price}`; // Format product information
  }
    // Method to return the price of the product
  productPriceReturn() {
    return `El precio de este producto es ${this.price}`;   // Return the price of the product
  }
};

// Creating product instances

const products02 = new ProductFeatures('Monitor Curvo de 49"', 800);//  (): arguments | Arguments: itemName, price
const products03 = new ProductFeatures('Laptop 15"', 600); //  (): arguments | Arguments: itemName, price, 

// Log product instances

console.log(products02,products03);

// Log the price of products using the productPriceReturn method
console.log(products02.itemName,products02.productPriceReturn());