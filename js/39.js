// Async - Await

function downloadNewClients(){
  // The function returns a promise
  return new Promise( resolve => {
    console.log('descargando clientes... espere...');
 

    // Simulate a 3-second delay using setTimeout (to simulate an asynchronous operation)
    setTimeout( () => {
      resolve('Los Clientes fueron descargados');// The promise is resolved after 3 seconds
    }, 3000);

  });
};


// setInterval is used to execute a function repeatedly after a set interval (commented out in this case)
/*setInterval(() => {
  console.log('set timeout ....');
}, 3000);
*/

async function app(){
  
  try {
    // Wait for downloadNewClients to resolve before continuing
    const result = await downloadNewClients();
    console.log('Este código se ejecuta despues del Await');
    
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

// Call the async app function
app();

// This code doesn't block while waiting for the promise, it executes immediately
console.log('Este código no se bloquea');