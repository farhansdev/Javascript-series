// 9. Write a function that calculates the area of a rectangle.
//  A = width * height
//  Pass width and height in following manner:
// i. Arguments as value
// ii. Arguments as variables

var h = +prompt("enter height of rectangle")
var w = +prompt("enter the width of rectangle")

function area(h, w) {

    return h * w
    
}
var result = area(h, w)
alert(result)