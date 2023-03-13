"use strict";
//Challenge 3
function miniMaxSum(arr) {
    const sortedArr = arr.sort((a, b) => a - b);
    const minSum = sortedArr.slice(0, 4).reduce((acc, curr) => acc + curr);
    const maxSum = sortedArr.slice(1).reduce((acc, curr) => acc + curr);
    console.log(`Min Sum is: ${minSum} Max Sum is: ${maxSum}`);
}
//functions testing
miniMaxSum([1, 3, 5, 7, 9]);
miniMaxSum([1, 2, 3, 4, 5]);
miniMaxSum([2, 4, 6, 8, 10]);
miniMaxSum([4, 4, 4, 4, 4]);
