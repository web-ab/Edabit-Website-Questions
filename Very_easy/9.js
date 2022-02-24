// 9. Question nine


// Question : Convert Hours into Seconds
// Write a function that converts hours into seconds.



// Examples

// . howManySeconds(2) ➞ 7200
// . howManySeconds(10) ➞ 36000
// . howManySeconds(24) ➞ 86400


/**
 * Notes :
 . Don't forget to return the result.
 . 60 seconds in a minute, 60 minutes in an hour
 */


// Answer

function howManySeconds(hours) {

    // 1 hour = 3600 second -> 60 * 60

	return hours * 60 * 60;
}

console.log(howManySeconds(2)); // 7200
console.log(howManySeconds(10)); // 36000
console.log(howManySeconds(24)); // 86400
console.log(howManySeconds(36)); // 129600