let ip = "2001:db8:3333:4444:5555:6666:7777:8888";
let ipRE = /\d{4}:\w\w\d:\d{4}:\d{4}:\d{4}:\d{4}:\d{4}:\d{4}/ig
console.log(ip.match(ipRE));
// done //