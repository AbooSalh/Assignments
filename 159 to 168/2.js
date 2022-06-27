let theDate = new Date(0)
theDate.setTime(11 * 360 * 24 * 60 * 60 * 1000 + 1000)

console.log(theDate.toUTCString());

// "Tue Jan 01 1980 00:00:01 GMT+0200 (Eastern European Standard Time)"


// done //