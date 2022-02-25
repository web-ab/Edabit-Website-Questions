// 16. Question Sixteen



// Question : Sum of Polygon Angles
// Given an n-sided regular polygon n, return the total sum of internal angles (in degrees).



// Examples

// . sumPolygon(3) ➞ 180
// . sumPolygon(4) ➞ 360
// . sumPolygon(6) ➞ 720


/**
 * Notes :
 . n will always be greater than 2.
 . The formula (n - 2) x 180 gives the sum of all the measures of the angles of an n-sided polygon.
 */



// Answer


function sumPolygon(n) {

    // In general, the sum of the interior angles of all polygons is calculated using the following formula:
    // S = (n−2) × 180°

    // . S: The sum of the interior angles of a polygon
    // . n: number of sides

	return (n - 2) * 180;
}

console.log(sumPolygon(3)); // 180 deg
console.log(sumPolygon(4)); // 360 deg
console.log(sumPolygon(5)); // 540 deg