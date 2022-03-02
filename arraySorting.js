const fruits = ["Banana", "Orange", "Apple", "Mango"];

// The sort() method sorts an array alphabetically:
console.log(fruits.sort()); // [ 'Apple', 'Banana', 'Mango', 'Orange' ]

// The reverse() method reverses the elements in array.
// Use it to sort an array in descending order:
console.log(fruits.reverse()); // [ 'Orange', 'Mango', 'Banana', 'Apple' ]

/* 
    By default, the sort() function sorts value as strings.
    It works well for strings, as "Apple" comes before "Banana".
    For numbers however, "25" comes before "100" since "2" is bigger than "1".
    Providing a compare function fixes the problem:
*/
const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){ return a - b });
console.log(points); // [ 1, 5, 10, 25, 40, 100 ]

// Do the same to sort in descending order:
points.sort(function(a, b){ return b - a });
console.log(points); // [ 100, 40, 25, 10, 5, 1 ]

// Find the highest or lowest value of an array by first sorting it,
// Then accessing their indeces, either points[0] or points[points.length - 1].

// Use Math.max.apply to find the highest number in an array,
// And Math.min.apply to find the lowest:
function myArrayMax(array) {
    return Math.max.apply(null, array);
    // Math.max.apply(null, [1, 2, 3]) is the same as Math.max(1, 2, 3)
}
function myArrayMin(array) {
    return Math.min.apply(null, array);
}
console.log(myArrayMax(points)); // 100
console.log(myArrayMin(points)); // 1

// The fastest solution is to use a "home-made" method:
function homemadeMax(array) {
    let len = array.length;
    let max =  - Infinity;
    while(len--) {
        if(array[len] > max) {
            max = array[len];
        }
    }
    return max;
}
function homemadeMin(array) {
    let len = array.length;
    let min = Infinity;
    while(len--) {
        if(array[len] < min) {
            min = array[len];
        }
    }
    return min;
}
console.log(homemadeMax(points)); // 100
console.log(homemadeMin(points)); // 1
