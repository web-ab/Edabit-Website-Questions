// Question : Are the Numbers Equal?
// Create a function that returns true when num1 is equal to num2; otherwise return fal



// Examples

// . isSameNum(4, 8) ➞ false
// . isSameNum(2, 2) ➞  true
// . isSameNum(2, "2") ➞ false


/**
 * Notes :
 . Don't forget to return the result.
 */



// Answer

function isSameNum(num1, num2) {
	return num1 === num2;
}

console.log(isSameNum(4, 8)); // false
console.log(isSameNum(2, 2)); // true
console.log(isSameNum(0, 6)); // false
console.log(isSameNum(2, "2")); // false