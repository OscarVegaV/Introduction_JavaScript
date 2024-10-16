/* 
   **Fetch API is the new standard
   It allows you to send and receive information from the server.
   You can obtain a local file or make a request to a server (text or JSON).
   All modern JavaScript APIs use Promises or async/await.

   JSON (JavaScript Object Notation) is a data format that allows the transportation of information
   and can be consumed in JavaScript via the Fetch API.
*/

async function obtainEmployees() {
  const file = 'employees.json';

  // Wait for the fetch call to resolve and get the result
  const result = await fetch(file);

// Wait for the response to be parsed as JSON
  const data = await result.json();

    // Log the parsed data to the console
  console.log(data);
}
// Call the async function to obtain employees
obtainEmployees();