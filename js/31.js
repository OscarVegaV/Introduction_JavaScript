// ** This Keyword **
// Refers to the current object within the same function

const booking = {
  firstName: 'Juan',
  lastName: 'De la Torre',
  total: 5000,
  paid: false,
  info: function () {             // Function without arrow to correctly reference properties using "this" keyword | (arrow functions would reference "this" from the parent scope, which could be undefined in this case)
    console.log( `El Cliente: ${this.firstName}, reservó y su cantidad a pagar es ${this.total}`);
  },
};

const booking02 = {
  firstName: 'Karina',
  lastName: 'Huelva',
  total: 10000,
  paid: false,
  info: function () {
 //         ** Same as above, using a regular function to reference "this" **
    console.log( `El Cliente: ${this.firstName}, reservó y su cantidad a pagar es ${this.total}`);
  },
}
booking.info();   // Output: El Cliente: Juan, reservó y su cantidad a pagar es 5000
booking02.info(); // Output: El Cliente: Karina, reservó y su cantidad a pagar es 10000
