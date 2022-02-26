// Question : Convert Hours and Minutes into Seconds
// Write a function that takes two integers (hours, minutes), converts them to seconds, and adds them.

// . wins get 3 points
// . draws get 1 point
// . losses get 0 points



// Examples

// . convert(1, 3) ➞ 3780
// . convert(2, 0) ➞ 7200
// . convert(0, 0) ➞ 0


/**
 * Notes :
 . Inputs will be numbers greater than or equal to 0.
 */



// Answer

function convert(hours, minutes) {
    return (hours * 60 * 60) + (minutes * 60);
}

console.log(convert(1, 0)); // 3600
console.log(convert(1, 3)); // 3780
console.log(convert(0, 30)); // 1800