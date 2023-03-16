// call, apply and bind


let person = {
    name: 'John',
}

function display() {
    console.log(this);
}


display.apply(person)

display

// Call: The call() method invokes a function with a given this value and arguments provided one by one
// Apply: Invokes the function with a given this value and allows you to pass in arguments as an array
// bind: returns a new function, allowing you to pass any number of arguments
