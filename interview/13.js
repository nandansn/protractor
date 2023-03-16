// In JavaScript, a "higher-order function" is a function that either takes one or more functions as arguments, returns a function as its result, or both. Higher-order functions are a key concept in functional programming, as they allow for powerful abstractions and composition of functions.

let add = function(a, b) {
  return a + b;
};

let add5 = add.bind(null, 5);
console.log(add5);
let result = add5(3);
console.log(result); 


// reall time application in the array.filter(you can pass the function, which returns true/false)

// [ref] (https://www.youtube.com/watch?v=0aKZvNNf8BA&ab_channel=ColorCode)

// In JavaScript, "functional composition" refers to the process of combining multiple functions to create a new function that performs a specific task. This technique allows for creating complex functionality by building upon and reusing simpler functions, making code more readable and maintainable
{

let add = function(a, b) {
  return a + b;
};

let double = function(x) {
  return 2 * x;
};

let composedFunction = function(a, b) {
  return double(add(a, b));
};

let result = composedFunction(3, 5);
console.log(result); // Output: 16

}
