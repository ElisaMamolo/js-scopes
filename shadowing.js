let a = 1;
let b = 2;

function inner() {
  a = 4; // reassigned
  let b = 3; // declared in an inner scope
}

inner();
console.log(a); // => 4
console.log(b); // => 2

//we called inner, go in it. When we use a we refer to global variable
//with let b at line 6, we create a function scope and the value of it is 3

//if i access b from line 11 is the global scope b i am accessing

