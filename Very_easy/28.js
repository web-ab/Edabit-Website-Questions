// Question : Equality Check
// Create a function that returns true when num1 is equal to num2; otherwise return fal

/**
 * In this challenge, you must verify the equality of two different values given the parameters a and b.

Both the value and type of the parameters need to be equal. The possible types of the given parameters are:

. Numbers
. Strings
. Booleans (false or true)
. Special values: undefined, null and NaN

What have you learned so far that will permit you to do two different checks (value and type) with a single statement?

Implement a function that returns true if the parameters are equal, and false if they are not.
 */


// Examples

// . checkEquality(1, true) ➞ false
// A number and a boolean: the value and type are different.

// . checkEquality(0, "0") ➞ false
// A number and a string: the type is different.

// . checkEquality(1,  1) ➞ true
// A number and a number: the type and value are equal.


/**
 * Notes :
 . Don't forget to return the result.
 */



// Answer

function checkEquality(a, b) {
    return a === b;
}


console.log(checkEquality(1, true)); // false
console.log(checkEquality(0, "0")); // false
console.log(checkEquality(1, 1)); // true
console.log(checkEquality(0, "")); // false
console.log(checkEquality(1, "1")); // false
console.log(checkEquality(0, false)); // false
console.log(checkEquality(NaN, NaN)); // false
console.log(checkEquality(null, undefined)); // false
console.log(checkEquality(undefined, undefined)); // true
console.log(checkEquality(false, null)); // false


























