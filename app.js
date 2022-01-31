console.log("Hello World");

const numbers = [2, 5, 7, 4, 8, 1, 3, 0, 6, 9];
document.getElementById('numbers').innerHTML = "List: " + numbers;

const sorted = numbers.sort();
document.getElementById('sorted').innerHTML = "Sorted list: " + sorted;

let matrix = [
    1, 2, 3,
    4, 5, 6,
    7, 8, 9,
];

let test = [
    9, 8, 7,
    6, 5, 4,
    3, 2, 1
];

document.getElementById('matrix').innerHTML = matrix;
document.getElementById('matrix2').innerHTML = test;
document.getElementById('addMatrices').innerHTML = matrix + ',' + test;

console.log(matrix);
console.log(matrix + ',' + test);