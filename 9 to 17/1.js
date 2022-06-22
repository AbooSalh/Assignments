// Add Variables Here
let num1 = 10;
let num2 = 20;

// Ouput
console.log(num1.toString() + num2.toString()); // Normal Concatenate => 1020
console.log(typeof (num1.toString() + num2.toString())); // Normal Concatenate => String
console.log(`${num1}${num2}`); // Template Literals Way => 1020
console.log(typeof `${num1}${num2}`); // Template Literals Way => String

console.log(num1.toString()+ "\n" + num2.toString() );
/*
  Normal Concatenate
  20
  10
*/

console.log(`${num1}
${num2}`);
/*
  Template Literals Way
  20
  10
*/