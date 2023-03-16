// In JavaScript, a "first-order function" is a function that does not return another function as its result. It is also known as a "non-higher-order function". A first-order function simply takes input(s), performs some computation(s), and returns an output value.

let add = function(a, b) {
  return a + b;
};

let result = add(3, 5);
console.log(result); // Output: 8
