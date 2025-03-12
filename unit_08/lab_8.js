// JSON string
const jsonString = '{"name": "Alice Johnson", "age": 32, "isEmployee": true}';

// Parse JSON string into a JavaScript object
const person = JSON.parse(jsonString);

console.log(person.name); // Output: Alice Johnson
console.log(person.age);  // Output: 32
console.log(person.isEmployee); // Output: true
