// 1. First question


// Question : Buggy Code (Part 7)
// Mubashir wants to swap two given numbers!

//It is not returning the right values. Can you help him fix it?



// Examples

// . swap(100, 200) ➞ [200, 100]
// . swap(44, 33) ➞ [33, 44]
// . swap(21, 12) ➞ [12, 21]


/**
 * Notes :
 . Don't forget to return the result.
 */



// Answer

function swap(a, b) {
	return [b,a];
}


console.log(swap(100 , 200)); // [ 200, 100 ]
console.log(swap(44,33)); // [ 33, 44 ]
console.log(swap(21,12)); // [ 12, 21 ]
console.log(swap(10 , 20)); // [ 20, 10 ]