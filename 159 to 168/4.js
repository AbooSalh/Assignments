const t1 = performance.now()
for (let i = 0; i < 99999; i++) {
    console.log(i);
}
const t2 = performance.now()
console.log(`loob took ${t2 - t1} milliseconds`)
// done //