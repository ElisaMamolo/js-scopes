/*Hoisting is a JavaScript mechanism where variables and function declarations 
are moved to the top of their scope before code execution.*/


//let and const hoist, but you can’t access them before the actual declaration is evaluated at runtime.
console.log(message); // => ReferenceError: Cannot access 'message' before initialization
let message = 'Hello from the global scope!';


//while with var shows a different and less clear error
console.log(message); // => undefined
var message = 'Hello from the global scope!';
