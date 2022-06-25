let myInfo = {
    username: "Osama",
    role: "Admin",
    country: "Egypt",
};
let myInfoMap = new Map()
// adding to Map
myInfoMap.set("username", myInfo.username)
myInfoMap.set("role", myInfo.role)
myInfoMap.set("country", myInfo.country)

console.log(myInfoMap) // Map(3) {'username' => 'Osama', 'role' => 'Admin', 'country' => 'Egypt'}
console.log(myInfoMap.size); // 3
console.log(myInfoMap.has("role")) // true
// done //