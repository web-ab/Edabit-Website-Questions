// Question : Fix the Expression
// Create a function that returns true when num1 is equal to num2; otherwise return fal



// Examples

// . isSeven(4) ➞ false
// . isSeven(9) ➞ false
// . isSeven(7) ➞ true


/**
 * Notes :
 . Don't forget to return the result.
 */



// Answer

function isSeven(x) {

    if (x == 7) {
        return true;
    }
    return false;

    // return x == 7; refactor
}


console.log(isSeven(4)); // false
console.log(isSeven(9)); // false
console.log(isSeven(7)); // true
console.log(isSeven(10)); // false
console.log(isSeven(20)); // false
console.log(isSeven(7)); // true
