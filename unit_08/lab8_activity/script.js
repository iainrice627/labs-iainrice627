// Fetch JSON data from staff.json and display it in a directory format



fetch('staff.json')   // this is a function that will fetch the data from the JSON file and display it. 
  .then(response => response.json()) // Parse JSON response - this will convert the response into a JS object.
  .then(data => {
    const directoryDiv = document.getElementById('directory');

    data.forEach(staff => {                                                // this will loop through each staff member object.it create htl structure for each one, adds details and appends to directory.
      // Create elements for each staff member
      const staffDiv = document.createElement('div');        // creates a div called staffDiv
      staffDiv.classList.add('staff');                          // the new staffDiv will access the class list and access add function which adds an id cakked 'staff'?

      const name = document.createElement('h2');   
      name.textContent = staff.name;

      const position = document.createElement('p');
      position.textContent = `Position: ${staff.position}`;

      const email = document.createElement('p');
      email.textContent = `Email: ${staff.email}`;

      // Append elements to the staff div       //  this adds detail to the above html structure.
      staffDiv.appendChild(name);
      staffDiv.appendChild(position);
      staffDiv.appendChild(email);

      // Append staff div to directory        // what directory?
      directoryDiv.appendChild(staffDiv);
    });
  })
  .catch(error => console.error('Error fetching JSON:', error));
