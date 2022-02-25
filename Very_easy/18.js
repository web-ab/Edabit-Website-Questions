// 18. Question Eighteen


// Question : Return the Sum of Two Numbers
// A student learning JavaScript was trying to make a function. His code should concatenate a passed string name with string "Edabit" and store it in a variable called result. He needs your help to fix this code.



// Examples

// . nameString("Mubashir") ➞ "MubashirEdabit"
// . nameString("Matt") ➞ "MattEdabit"
// . nameString("javaScript") ➞ "javaScriptEdabit"


/**
 * Notes :
 . Don't forget to return the result.
 */



// Answer

function nameString(name){
	var b = "Edabit";
	var result = name + b;
  	return result;
}

console.log(nameString("Mubashir")); // MubashirEdabit
console.log(nameString("Matt")); // MattEdabit
console.log(nameString("javaScript")); // javaScriptEdabit
console.log(nameString("Airforce")); // AirforceEdabit