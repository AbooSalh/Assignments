let specialNames = "Os10O OsO Os100O Osa100O Os1000 Os100m";
let re = /os\d{0,}o/ig
console.log(specialNames.match(re));
// done // 