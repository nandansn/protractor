// prototype chain

// a prototype is an object that serves as a blueprint for creating instances of objects with similar properties and methods. The prototype chain refers to the relationship between an object and its prototype, and how this relationship affects property and method access.

let vehicles = {
    move: true
}


let car = {
    wheels: 4
}

car.__proto__ = vehicles


console.log(car.move);