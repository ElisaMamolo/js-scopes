//Global scope -> functional and local and also global
//Functional/local scope -> accessible only within the function and in child scopes 
//Block scope limited to the statement or expression of which the variable was declared, in between {}



//Var declaration and scope

//Using keyword var to declare variables, they become available in:
//global or in the function/local scope.
var message = 'Hello from the global scope!';

function sayHelloFromLocalScope() {
  var greeting = 'Hello from functional/local scope!';
  return greeting;
}

console.log(message); // <== Hello from the global scope!
console.log(greeting); // <== ReferenceError: greeting is not defined


let outerVar = 1;

function inner() {
  let innerVar = 2;
  console.log(outerVar);
}

console.log(innerVar); // => ReferenceError: innerVar is not defined



//window object var variables are stored in it, you can call this the object environment record

//let and const can be accessed from anywhere based on their scope, they are un the declarative environment record



//let and const
//let gives block scoping, not bound to the global or window object by default
for (let i = 1; i <= 30; i++) {
    console.log(`Iteration number: ${i}`); //i has block scoping
  }
  
  console.log(`After the loop: ${i}`);
  
  // [...]
  // Iteration number: 29
  // Iteration number: 30
  // Iteration number: 30
  //
  // console.log("After the loop", i);
  //                               ^
  // ReferenceError: i is not defined


  // THIS IS OKAY
let message = 'This is the first message.';
message = 'This is the second message.'; // <== This is the second message.


// BUT THIS WILL THROW AN ERROR

let message = 'This is the first message.';
let message = 'This is the second message.'; // <== Duplicate declaration "message"

//another example with let
let name = 'Ironhacker';

if (true) {
  let name = 'Ted';
  console.log(`Name inside if statement: ${name}`);
}

console.log(`Name outside if statement: ${name}`);

// Name inside if statement: Ted
// Name outside if statement: Ironhacker


// THIS WILL THROW AN ERROR
const message = 'This is the first message.';
message = 'This is the second message.'; // <== "message" is read-only

// AND THIS WILL THROW AN ERROR

const message = 'This is the first message.';
const message = 'This is the second message.'; // <== Duplicate declaration "message"
