// 12. Question twelve


// Question : Find the Perimeter of a Rectangle
// Create a function that takes length and width and finds the perimeter of a rectangle.



// Examples

// . findPerimeter(6, 7) ➞ 26
// . findPerimeter(20, 10) ➞ 60
// . findPerimeter(2, 9) ➞ 22


/**
 * Notes :
 . Don't forget to return the result.
 */


// Answer


function findPerimeter(length, width) {

    // the perimeter of a rectangle -> 2 length + 2 width

	return (length * 2) + (width * 2);
}

console.log(findPerimeter(6, 7)); // 26
console.log(findPerimeter(20, 10)); // 60
console.log(findPerimeter(2, 9)); // 22