//Explain the difference between var,let and const
//var:
//Variables declared with var can be reassigned. Variables declared with let can be reassigned. 
//Variables declared with const cannot be reassigned. 
//Variables declared with var are hoisted, which means they can be accessed before they are declared.

//Example:
function example() {
    console.log(a); // undefined (due to hoisting)
    var a = 10;
    console.log(a); // 10
}
example();

//let:
//Scope: Block-scoped, meaning it is confined to the block (like if, for, or {}) in which it is declared.
//Hoisting: Like var, let is hoisted, but it is not initialized. Accessing the variable before its declaration results in a ReferenceError (due to the temporal dead zone).
//Re-declaration: let does not allow re-declaration within the same block, which helps prevent accidental overwrites.
function example() {
    console.log(a); // ReferenceError: Cannot access 'a' before initialization
    let a = 10;
    console.log(a); // 10
}
example();

//const:
//Scope: Block-scoped, similar to let. It is limited to the block in which it is declared.
//Hoisting: Like let, const is hoisted but is also subject to the temporal dead zone. Accessing it before initialization results in a ReferenceError.
//Re-declaration: const does not allow re-declaration within the same block.
//Assignment: const requires an initial value at the time of declaration, and the variable cannot be reassigned. However, for objects and arrays, the contents (i.e., properties or elements) can be modified.
const a = 10;
console.log(a); // 10
a = 20; // TypeError: Assignment to constant variable.

const obj = {name: "John"};
obj.name = "Doe"; // Allowed - object properties can be changed
console.log(obj.name); // "Doe"


