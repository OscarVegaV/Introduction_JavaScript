// control Structues 

// if
const score = 1000;

if (score == 1000) {
  console.log('Si el Puntaje es 1000');// Output: Si el Puntaje es 1000
};

// else
const score02 = 1001;
if (score02 === 1000) {
  console.log('Si el Puntaje es 1000');
} else{
  console.log( 'El puntaje no es 1000');// Output: El puntaje no es 1000
};

const score03 = 1000;
if (score03 !== 1000) {                 // !== (no estrictamente igual)
  console.log( `el Puntaje(${score03}) es diferente a 1000 `);
} else{
  console.log( `el Puntaje(${score03}) es igual a 1000 `); // Output: El Puntaje(1000) es igual a 1000
};

const cash = 1000;
const valueCartItem = 800;
if (cash > valueCartItem) {
  console.log('El Usuario Puede Pagar');  // Output: El Usuario Puede Pagar
} else { 
  console.log('fondos Insuficientes');
};

//elseIf
const role = 'Admin';
if (role === 'Admin') {
  console.log( `Tu rol: (${role}) te da Acceso a todo el Sistema`); // Output: Tu rol: (Admin) te da Acceso a todo el Sistema
} else if (role=== 'Editor') {
  console.log(`Tu rol: (${role}) te da Acceso pero con limitciones`);// Output: Tu rol: (Editor) te da Acceso a todo el Sistema
} else {
  console.log('NO tines acceso')
};
