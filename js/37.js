// JavaScript Promises

//Defining  the promise
const userAuthenticated  = new Promise((resolve, reject) => {  //created a new instance of Promice

  const auth = true;

  if (auth) {
    resolve('Usuario Autenticado'); // The promise is fulfilled
  } else {
    reject('Usuario No se pudo iniciar sesión'); // The promise is rejected
  };
});

// Handling the result of the promise
userAuthenticated 
  //
  .then(result => console.log(result))  // Handling fulfilled promise
  .catch(error => console.log(error));  // Handling rejected promise

/* 
Promises have 3 states:
  1. Pending: The promise has been made, but not yet fulfilled or rejected.
  2. Fulfilled: The promise was successful, and resolve() was called.
  3. Rejected: The promise failed, and reject() was called.
*/ 


