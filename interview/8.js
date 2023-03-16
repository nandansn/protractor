// compare Object and Map

// The keys of an Object are Strings and Symbols, whereas they can be any value for a Map, including functions, objects, and any primitive.
// The keys in Map are ordered while keys added to Object are not. Thus, when iterating over it, a Map object returns keys in order of insertion.
// You can get the size of a Map easily with the size property, while the number of properties in an Object must be determined manually.
// A Map is an iterable and can thus be directly iterated, whereas iterating over an Object requires obtaining its keys in some fashion and iterating over them.
// An Object has a prototype, so there are default keys in the map that could collide with your keys if you're not careful. As of ES5 this can be bypassed by using map = Object.create(null), but this is seldom done.
// A Map may perform better in scenarios involving frequent addition and removal of key pairs.

let person = {
  name: "John",
  age: 34,
  city: "San Francisco",
};

console.log(person);

// finding size of object

console.log(Object.keys(person).length);

for (const key in person) {
  console.log(key);
}

// Object.keys() method: This method returns an array of a given object's own enumerable property names, which can then be used in a for loop.

// Object.values() method: This method returns an array of a given object's own enumerable property values, which can then be used in a for loop.

// Object.entries() method: This method returns an array of arrays, each containing a key-value pair from the object, which can then be used in a for loop.

let student = new Map();
student.set(1, "John");
student.set(2, "San Francisco");
student.set(3, "San Franciscos");

console.log(student.size);

for (const entry of student) {
  console.log(entry);
}

// for...of loop: This loop iterates over the values of a Map object.
// forEach() method: This method allows you to apply a callback function to each key-value pair in a Map object.
// for...of loop with destructuring: This loop allows you to iterate over the key-value pairs of a Map object, and destructures each pair into separate variables.
