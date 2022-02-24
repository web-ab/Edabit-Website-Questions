// 2. Second question


// Question : Convert Minutes into Seconds
// Write a function that takes an integer minutes and converts it to seconds.



// Examples

// . convert(5) ➞ 300
// . convert(3) ➞ 180
// . convert(2) ➞ 120


/**
 * Notes :
 . Don't forget to return the result.
 */


// Answer


function convert(minutes) {

    // To convert minute to second we have to multiply
    // the minute by 60 seconds because every 1 minute
    // equals 60 seconds

    return minutes * 60; // 1 minute = 60 sec
}


console.log(convert(6)) //360
console.log(convert(4)) //240
console.log(convert(8)) //480
console.log(convert(60)) //3600