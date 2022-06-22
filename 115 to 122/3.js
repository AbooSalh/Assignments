let arr1 = ["Ahmed", "Sameh", "Sayed"];
let arr2 = ["Mohamed", "Gamal", "Amir"];
let arr3 = ["Haytham", "Shady", "Mahmoud"];
let arr4 = []

// Play With Arrays To Prepare For Destructuring
arr1.map((ele=>{
    arr4.push(ele)
}))
arr2.map((ele=>{
    arr4.push(ele)
}))
arr3.map((ele=>{
    arr4.push(ele)
}))
// Write Your Destructuring Assignment Here
let [c,,,,,,,a,b] = arr4;

console.log(`My Best Friends: ${a}, ${b}, ${c}`);

// My Best Friends: Shady, Mahmoud, Ahmed
// done
