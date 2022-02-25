// 13. Question thirteen


// Question : Return Something to Me!
// Write a function that returns the string "something" joined with a space " " and the given argument a.



// Examples

// . giveMeSomething("is better than nothing") ➞ "something is better than nothing"
// . giveMeSomething("Bob Jane") ➞ "something Bob Jane"
// . giveMeSomething("something") ➞ "something something"


/**
 * Notes :
 . Assume an input is given.
 */



// Answer


function giveMeSomething(a) {
	return "something" + " " + a;
}

console.log(giveMeSomething("a")); // something a
console.log(giveMeSomething("is cooking")); // something is cooking
console.log(giveMeSomething(" is cooking")); // something  is cooking
