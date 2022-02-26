// 1. First question


// Question : The Farm Problem
// In this challenge, a farmer is asking you to tell him how many legs can be counted among all his animals. The farmer breeds three species:

// . chickens = 2 legs
// . cows = 4 legs
// . pigs = 4 legs




// Examples

// . animals(2, 3, 5) ➞ 36
// . animals(1, 2, 3) ➞ 22
// . animals(5, 2, 8) ➞ 50


/**
 * Notes :
 . Don't forget to return the result.
 . The order of animals passed is animals(chickens, cows, pigs).
 . Remember that the farmer wants to know the total number of legs and not the total number of animals.
 */



// Answer

function animals(chickens, cows, pigs) {
	return (chickens * 2) + (cows * 4) + (pigs * 4);
}

console.log(animals(5,2,8)); // 50
console.log(animals(3,4,7)); // 50
console.log(animals(1,2,3)); // 22
console.log(animals(3,5,2)); // 34