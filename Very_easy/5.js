// 5. Fifth question


// Question : Convert Age to Days
// Create a function that takes the age in years and returns the age in days.




// Examples

// . calcAge(65) ➞ 23725
// . calcAge(0) ➞ 0
// . calcAge(20) ➞ 7300


/**
 * Notes :
 .Use 365 days as the length of a year for this challenge.
 .Ignore leap years and days between last birthday and now.
 .Expect only positive integer inputs.
 */


// Answer

function calcAge(age) {

    // 1 Year = 365 day

	return age * 365;
}

console.log(calcAge(10)); // 3650
console.log(calcAge(0)); // 0
console.log(calcAge(73)); // 26645