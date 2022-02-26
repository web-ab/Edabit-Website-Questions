// Question : Football Points
// Create a function that takes the number of wins, draws and losses and calculates the number of points a football team has obtained so far.

// . wins get 3 points
// . draws get 1 point
// . losses get 0 points



// Examples

// . footballPoints(3, 4, 2) ➞ 13
// . footballPoints(5, 0, 2) ➞ 15
// . footballPoints(0, 0, 1) ➞ 0


/**
 * Notes :
 . Inputs will be numbers greater than or equal to 0.
 */



// Answer

function footballPoints(wins, draws, losses) {
	return (wins * 3) + (draws * 1) + (losses * 0);
}

console.log(footballPoints(1, 2, 3)); // 5
console.log(footballPoints(5, 5, 5)); // 20
console.log(footballPoints(1, 0, 0)); // 3
console.log(footballPoints(0, 7, 0)); // 7
console.log(footballPoints(0, 0, 15)); // 0