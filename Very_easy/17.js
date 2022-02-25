// 17. Question Seventeen


// Question : Basketball Points
// You are counting points for a basketball game, given the amount of 2-pointers scored and 3-pointers scored, find the final points for the team and return that value.




// Examples

// . points(1, 1) ➞ 5
// . points(7, 5) ➞ 29
// . points(38, 8) ➞ 100


/**
 * Notes :
 . Don't forget to return the result.
 */



// Answer


function points(twoPointers, threePointers) {
	return (twoPointers * 2 ) + (threePointers * 3);
}

console.log(points(1, 1)); // 5
console.log(points(7, 5)); // 29 
console.log(points(38, 8)); // 100