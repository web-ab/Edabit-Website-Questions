// 4. Fourth question


// Question : Area of a Triangle
// Write a function that takes the base and height of a triangle and return its area.



// Examples

// . triArea(3, 2) ➞ 3
// . triArea(7, 4) ➞ 14
// . triArea(10, 10) ➞ 50


/**
 * Notes :
 . Don't forget to return the result.
 .The area of a triangle is: (base * height) / 2
 */


// Answer

function triArea(base, height) {
    
    // The area of a triangle is: (base * height) / 2

	return (base * height) / 2;
}

console.log(triArea(3, 2)) // 3
console.log(triArea(5, 4)) // 10
console.log(triArea(10, 10)) // 50
console.log(triArea(0, 60)) // 0
console.log(triArea(12, 11)) // 66