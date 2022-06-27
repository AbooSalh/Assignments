const myObj = {
    username: "Elzero",
    id: 100,
    score: 1000,
    country: "Egypt",
};

// Write Your Code Here

Object.defineProperty(myObj, "score", {
    writable: false,
    value: 1000,
})
Object.defineProperty(myObj, "id", {
    writable: false,
    enumerable: false,
    configurable: false,
    value: 100,
})
delete myObj.country

myObj.score = 500;

for (let prop in myObj) {
    console.log(`${prop} => ${myObj[prop]}`);
}


console.log(myObj);