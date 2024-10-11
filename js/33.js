// Prototypes -- Object-Oriented Programming (OOP) 

// ** Object Constructor for Client **
function Client(clientName, lastName) {
  this.clientName = clientName;  // Assign clientName to the object
  this.lastName = lastName;   // Assign lastName to the object
};

// ** Object Constructor for Product Features **
function ProductFeatures (itemName, price) {   //(): parameters function ProductFeatures(itemName, price) {    // Parameters: itemName, price, 
  this.itemName = itemName; // Assign itemName to the object
  this.price = price; //  Assign price to the object
};

// ** Prototypes - Methods specific to ProductFeatures **

// Prototypes - Allow us to create functions that are specific to a certain object.
ProductFeatures.prototype.productFormat = function() {
  return `El Producto: ${this.itemName} tiene un precio de: ${this.price}`; // Format product information
};

// Creating product instances
const products02 = new ProductFeatures('Monitor Curvo de 49"', 800,);//  (): arguments | Arguments: itemName, price, 
const products03 = new ProductFeatures('Laptop 15"', 600, ); //  (): arguments | Arguments: itemName, price, 

// Creating a client instance
const client = new Client('Josúe', 'Vega');
console.log(client);


// Prototypes - Allow us to create functions that are specific to a certain object.
Client.prototype.clientFormat = function() {
  return `El Cliente: ${this.clientName} ${this.lastName}`; // Format client information
};


// Function without prototype
function productFormat(product) {
  return `El Producto: ${product.itemName} tiene un precio de: ${product.price}`;  // Format product information
};

// Log product instances and their formatted information
console.log(products02);
console.log(products02.productFormat());
console.log(products03.productFormat());



