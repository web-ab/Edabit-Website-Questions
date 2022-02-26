// Question : Profitable Gamble
// Create a function that takes three arguments prob, prize, pay and returns true if prob * prize > pay; otherwise return false.



// Examples

// . profitableGamble(0.2, 50, 9) ➞ true
// . profitableGamble(0.9, 1, 2) ➞ false
// . profitableGamble(0.9, 3, 2) ➞ true


/**
 * Notes :
 . A profitable gamble is a game that yields a positive net profit, where net profit is calculated in the following manner: net_outcome = probability_of_winning * prize - cost_of_playing.
 */



// Answer


function profitableGamble(prob, prize, pay) {

    if(prob * prize > pay){
        return true;
    }

    return false;
    
	// return prob * prize > pay; refactor
}

console.log(profitableGamble(0.2, 50, 9)); // true
console.log(profitableGamble(0.9, 1, 2)); // false
console.log(profitableGamble(0.9, 3, 2)); // true
console.log(profitableGamble(0.33, 10, 3.30)); // true
console.log(profitableGamble(0, 1000, 0.01)); // false
console.log(profitableGamble(0.1, 1000, 7)); // true
console.log(profitableGamble(0, 0, 0)); // false
