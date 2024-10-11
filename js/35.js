// ** Inheritance in Object-Oriented Programming (OOP) **

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
};

// Creating product instances
const products02 = new ProductFeatures('Monitor Curvo de 49"', 800);//  (): arguments | Arguments: itemName, price
const products03 = new ProductFeatures('Laptop 15"', 600); //  (): arguments | Arguments: itemName, price, 



//      **inheritance**

// Class `Book` extends `ProductFeatures` to inherit its properties and methods
class Book extends ProductFeatures {

  constructor(itemName, price, isbn) {
    // Call the parent class constructor using `super` to initialize `itemName` and `price`
    super(itemName, price);

  //   this.itemName = itemName;
  //   this.price = price;

  this.isbn = isbn;      // Initialize the new property `isbn`

}

  // Overriding the `productFormat` method to include the ISBN
  productFormat() {

    // Use `super.productFormat()` to call the parent class method and add the `isbn`
    return `${super.productFormat()} tiene un precio de: ${this.price} y su ISBN: ${this.isbn}`; 
  }
  
}
// Creating book instances
const bookInstance = new Book('JavaScript La Revolución 2015', 120, '910055656559826');

// Log product and book instances
console.log(products02.productFormat());       // Output for product instance
console.log(bookInstance.productFormat());      // Output for book instance (with ISBN)

