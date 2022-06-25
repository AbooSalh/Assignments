let theNumber = 100020003000;
let theNumberMap = new Set(Array.from(theNumber.toString(), num => +num)); theNumberMap.delete(0);
console.log(theNumberMap);
// Not done //