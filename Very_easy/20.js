// Question : Buggy Code (Part 5)
// Mubashir created an infinite loop! Help him by fixing the code in the code tab to pass this challenge. Look at the examples below to get an idea of what the function should do.



// Examples

// . printArray(1) ➞ [1]
// . printArray(3) ➞ [1, 2, 3]
// . printArray(6) ➞ [1, 2, 3, 4, 5, 6]


/**
 * Notes :
 . Don't forget to return the result.
 */



// Answer


function printArray(number) {
    var newArray = [];

    for (var i = 1; i <= number; i++) {
        newArray.push(i);
    }

    return newArray;
}

console.log(printArray(1));
console.log(printArray(2));
console.log(printArray(3));
console.log(printArray(4));
console.log(printArray(5));
console.log(printArray(6));
console.log(printArray(7));
console.log(printArray(8));
console.log(printArray(9));
console.log(printArray(10));