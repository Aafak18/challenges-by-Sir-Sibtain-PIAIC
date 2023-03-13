"use strict";
//challenge 2
function timeConversion(s) {
    const timeArr = s.slice(0, -2).split(":");
    const hours = parseInt(timeArr[0]);
    const isPM = s.slice(-2) === "PM";
    if (hours === 12) {
        return `${isPM ? 12 : 0}${timeArr[1]}`;
    }
    // else if (hours === 12 && isPM) {}
    else {
        return `${hours + (isPM ? 12 : 0)}${timeArr[1]}`;
    }
}
//function calling
console.log(timeConversion("12:01:00PM"));
console.log(timeConversion("06:30:00PM"));
