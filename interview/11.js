// In JavaScript, a "first-class function" refers to the fact that functions are treated as first-class citizens, meaning they can be assigned to variables, passed as arguments to other functions, and returned as values from other functions. This makes functions in JavaScript highly versatile and powerful.


let add = function(a,b) {
    return a + b;
}


function calc(a, b , cb) {

    let result = cb(a,b)
    console.log(result);
    
}


calc(10,12, add)

// Assigning a function to a variable
let printHello = function() {
  console.log("Hello");
};

// Passing a function as an argument to another function
let callFunction = function(func) {
  func();
};

callFunction(printHello); // Output: "Hello"

// Returning a function from another function
let returnFunction = function() {
  return printHello;
};

let returnedFunction = returnFunction();
returnedFunction(); // Output: "Hello"
