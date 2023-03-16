let obj1 = {
  name: "nanda",
};

class Test {
  constructor() {}
}

function createPerson(name, age) {

    return {
        name: name,
        age: age
    }
    
}


function Car(name, age) {

    this.name = name;
    this.age = age;
    
}

let maruti = new Car('nanda', 12);


console.log(maruti);


let myCar = new (
    function ABC() {
        this.name = 'bcv'
    }
)();

console.log(myCar);

let house = Object.create(null);



house.name = 'nanda'

console.log(house);

let job = new Object();

job.title = "QA"

console.log(job);


