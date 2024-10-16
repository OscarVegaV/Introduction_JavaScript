/* 
   **Fetch API is the new standard
   It allows you to send and receive information from the server.
   You can obtain a local file or make a request to a server (text or JSON).
   All modern JavaScript APIs use Promises or async/await.

   JSON (JavaScript Object Notation) is a data format that allows the transportation of information
   and can be consumed in JavaScript via the Fetch API.
*/


// Function to obtain and display employees
function obtainEmployees() {
  const file = 'employees.json';
  fetch(file)  
  .then (result => {                    
    return result.json();  // Path to the JSON file
  })

  .then (data => {

      // Destructure the array of employees
      const { employees } = data;

    employees.forEach(employee => {
    //  console.log(employee);
      console.log(employee.id);
      console.log(employee.name);
      console.log(employee.profession);
    });
  })


}
obtainEmployees();// I don't remember that made this code 

