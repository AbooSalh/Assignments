class User {
    constructor(username, card) {
        this.u = username;
        this.c = card;
    }
    get showData() {
        return `Hello ${this.u} your credit card number is ${conv(this)}`
    }
}

function conv(i) {
    if (i.c.toString().match(/\d{4}-\d{4}-\d{4}-\d{4}/)) {
        return i.c.toString()
    } else {
        let arr = []
        arr.push(i.c.toString().slice(0, 4))
        arr.push(i.c.toString().slice(0, 4))
        arr.push(i.c.toString().slice(0, 4))
        arr.push(i.c.toString().slice(0, 4))
        return arr.join("-")
    }
}
// Do Not Edit Anything Below

let userOne = new User("Osama", "1234-5678-1234-5678");
let userTwo = new User("Ahmed", "1234567812345678");
let userThree = new User("Ghareeb", 1234567812345678);
console.log(userOne.showData);
// Hello Osama Your Credit Card Number Is 1234-5678-1234-5678

console.log(userTwo.showData);
// Hello Ahmed Your Credit Card Number Is 1234-5678-1234-5678

console.log(userThree.showData);
// Hello Ghareeb Your Credit Card Number Is 1234-5678-1234-5678
delete userOne.c
console.log(userOne.c); // Prevent Accessing To Card Property Here
// Undefined


// done//