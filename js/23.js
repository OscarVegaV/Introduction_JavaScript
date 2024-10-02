// ** Function that returns a value **
function sumNumbers(num1 , num2) {          // n1, n2 are parameters
  return num1 + num2;             // returns the sum of n1 and n2
};

const result = sumNumbers(2, 3);

console.log(result); // ouput: 5



// Example of accumulating values
let cartSubTotal = 0;
function addItemToCart(itemPrice) {
  return cartSubTotal += itemPrice;   // adds the price to cartSubTotal
};

function calculateTax(subTotal) {
  return subTotal * 1.15;// calculates 15% tax on subTotal
};

// Adding prices to the cart
cartSubTotal  = addItemToCart(200); // add 200 to cartSubTotal
cartSubTotal  = addItemToCart(400); // add 400 to cartSubTotal
cartSubTotal  = addItemToCart(600); // add 600 to cartSubTotal

console.log(cartSubTotal);// output: 1200

const totalWithTax = calculateTax(cartSubTotal);    // calculates the total with 15% tax added

console.log(`total a pagar con Impuestos:  $${totalWithTax}`);// ouput 1380