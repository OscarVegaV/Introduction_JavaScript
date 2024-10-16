// Async - Await | Working in 2 ways

function downloadNewClients(){
  // The function returns a promise
  return new Promise( resolve => {
    console.log('Descargando clientes... espere...');
 

    // Simulate a 5-second delay using setTimeout (to mimic an asynchronous operation)
    setTimeout( () => {
      resolve('Los Clientes fueron descargados');// The promise resolves after 5 seconds
    }, 5000);

  });
};

function downloadLatestOrder(){
  // The function returns a promise
  return new Promise( resolve => {
    console.log('Descargando Pedidos... espere...');
 

    // Simulate a 3-second delay using setTimeout (to simulate an asynchronous operation)
    setTimeout( () => {
      resolve('Los Pedidos fueron descargados');// The promise is resolved after 3 seconds
    }, 3000);

  });
};

async function app(){
  
  try {
  /*  // Wait for downloadNewClients to resolve before continuing
    const clients = await downloadNewClients();   
    const orders = await downloadLatestOrder();   
    console.log(clients);
    console.log(orders);
   */

    // Using **Promise.all** to run both downloads in parallel

    const result = await Promise.all([downloadNewClients(),downloadLatestOrder()])
    console.log(result[0]);// Logs the result of downloadNewClients
    console.log(result[1]);// Logs the result of downloadLatestOrder


  } catch (error) {
    console.log(error);
  }
};

// Call the async app function
app();

