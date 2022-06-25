let chars = ["A", "B", "C", "D", "E", 10, 15, 6];
chars.sort(); // [10, 15, 6, "A", "B", "C", "D", "E"];
chars.copyWithin(0, 3, 6); // ['A', 'B', 'C', 'A', 'B', 'C', 'D', 'E']
console.log(chars);
// i think it done //
