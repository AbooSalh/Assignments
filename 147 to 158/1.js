// function Car(name, model, price) {
//   this.n = name;
//   this.m = model;
//   this.p = price;
// }
class Car {
    constructor(name, model, price) {
        this.name = name;
        this.model = model;
        this.price = price;
    }
    run() {
        return "Car Is Running Now"
    }
    stop() {
        return "Car is stopped"
    }
}

let carOne = new Car("accent", 2022, 420000);
let carTwo = new Car("accent", 2022, 420000);
let carThree = new Car("accent", 2022, 420000);


console.log(`Car one name is ${carOne.name} And model is ${carOne.model} and price is ${carOne.price}`);
console.log(carOne.run());
 
// done //