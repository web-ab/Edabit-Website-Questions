// 19. Question nineteen


// Question : Less Than 100?
// Create a function that takes two numbers as arguments and returns their sum.



// Examples

// . lessThan100(22, 15) ➞ true // 22 + 15 = 37
// . lessThan100(83, 34) ➞ false // 83 + 34 = 117
// . lessThan100(3, 77) ➞ true


/**
 * Notes :
 . Don't forget to return the result.
 */



// Answer


function lessThan100(a, b) {

    if(a+b < 100){
        return true;
    }

    return false;

    // or :

	// return a + b < 100; -> refactor code
}

console.log(lessThan100(5, 57)); // true
console.log(lessThan100(77, 30)); // false
console.log(lessThan100(0, 59)); // true
console.log(lessThan100(78, 35)); // false
console.log(lessThan100(63, 11)); // true
console.log(lessThan100(37, 99)); // false
console.log(lessThan100(52, 11)); // true
console.log(lessThan100(82, 95)); // false