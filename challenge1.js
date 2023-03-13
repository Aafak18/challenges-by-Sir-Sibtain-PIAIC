"use strict";
// Challenge 1
function average(...numbers) {
    if (numbers.length === 0) {
        return 0;
    }
    const sum = numbers.reduce((acc, curr) => acc + curr);
    return sum / numbers.length;
}
//Function calls:
console.log(average(2, 4, 6));
console.log(average(1, 3, 5, 7, 9));
console.log(average());
