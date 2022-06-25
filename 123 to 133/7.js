let numsOne = [1, 2, 3];
let numsTwo = [4, 5, 6];

// 1
console.log([...numsOne, ...numsTwo]);

// 2
console.log(numsOne.concat(numsTwo));

// 3 
let theArray = []
numsOne.map((ele) => {
    theArray.push(ele)
})
numsTwo.map((ele) => {
    theArray.push(ele)
})
console.log(theArray);


// 4
const merge = (first, second) => {
    for (let i = 0; i < second.length; i++) {
        first.push(second[i]);
    }
    return first;
}
console.log(merge(numsOne, numsTwo));


// 5 
let mySet = new Set()
numsOne.map((ele) => {
    mySet.add(ele)
})
numsTwo.map((ele) => {
    mySet.add(ele)
})
console.log([...mySet]);

// i think its done //