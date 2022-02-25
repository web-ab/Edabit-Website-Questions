// 15. Question Fifteen



// Question : Is the Number Less than or Equal to Zero?
// Create a function that takes a number as its only argument and returns true if it's less than or equal to zero, otherwise return false.



// Examples

// . lessThanOrEqualToZero(5) ➞ false
// . lessThanOrEqualToZero(0) ➞ true
// . lessThanOrEqualToZero(-2) ➞ true


/**
 * Notes :
 . Don't forget to return the result.
 */



// Answer


function lessThanOrEqualToZero(num) {
	return num <= 0 ;
}

console.log(lessThanOrEqualToZero(5)); // false
console.log(lessThanOrEqualToZero(0)); // true
console.log(lessThanOrEqualToZero(-5)); // true