"use strict";
function plusMinus(arr) {
    const len = arr.length;
    let posCount = 0;
    let negCount = 0;
    let zeroCount = 0;
    for (let i = 0; i < len; i++) {
        if (arr[i] > 0) {
            posCount++;
        }
        else if (arr[i] < 0) {
            negCount++;
        }
        else {
            zeroCount++;
        }
    }
    const posRatio = (posCount / len).toFixed(6);
    const negRatio = (negCount / len).toFixed(6);
    const zeroRatio = (zeroCount / len).toFixed(6);
    console.log(posRatio);
    console.log(negRatio);
    console.log(zeroRatio);
}
// plusMinus([1, 0, -3, 4, -5]);
plusMinus([-4, 3, -9, 0, 4, 1]);
