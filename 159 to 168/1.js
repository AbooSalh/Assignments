
let myDate = new Date("2006 4 17")
let myAge = new Date() - myDate
console.log(Math.floor(myAge / 1000) + " seconds");
console.log(Math.floor(myAge.toFixed() / 1000 / 60) + " Minutes");
console.log(Math.floor(myAge.toFixed() / 1000 / 60 / 60) + " Hours");
console.log(Math.floor(myAge.toFixed() / 1000 / 60 / 60 / 24) + " Days");
console.log(Math.floor(myAge.toFixed() / 1000 / 60 / 60 / 24 / 364) + " Years");
// done //