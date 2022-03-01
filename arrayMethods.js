const fruits = ["Banana", "Orange", "Apple", "Mango"];

// The toString() method converts an array to a comma-separated string:
console.log(fruits.toString());

// The join() method joins all array elements into a string, 
// in addition to being able to add a specific separator:
console.log(fruits.join(", "));

// The pop() method returns the value that was popped out:
const fruit = fruits.pop()
console.log(fruit);

// The pop() method removes the last element of an array:
console.log(fruits.pop());

// The push() method adds a new element to the end of an array:
fruits.push("Kiwi");
console.log(fruits);

// The push() method returns the new array length:
let length = fruits.push("Lemon");
console.log(fruits);
console.log("Number of array elements = " + length);

// The shift() method removes the array's first value, and "shifts" the others to
// the index below:
fruits.shift();
console.log(fruits);

// The shift() method returns the value that was "shifted out":
console.log(fruits.shift());

// The unshift() method adds a new element to an array, and unshifts older elements:

fruits.unshift("Pear");
console.log(fruits);

// The unshift method returns the new array length:

console.log(fruits.unshift());

// Access array elements using their imndex numbers starting from 0:

const veggies = ["Cucumber", "Raddish", "Carrot"];
veggies[0] = "Tomato";
console.log(veggies);

// The concat() method creates a new array by merging existing arrays:
const greens = fruits.concat(veggies); // Always returns a new array
console.log(greens);

// Merging multiple arrays:
const arr1 = ["Bob", "Richard"];
const arr2 = ["Luke", "Ben"];
const arr3 = ["Tom", "Andrew"];
const names = arr1.concat(arr2, arr3);
console.log(names);

/*
    - The splice() method adds new items to an array
    - The slice() method slices out a piece of an array
*/
const cars = ["Volvo", "BMW", "Fiat"];
cars.splice(2, 0, "Renault", "Peugeot");
console.log(cars);
// The first parameter (2) defines where new elements should be added.
// The second parameter (0) defines how many elements should be removed.
// The rest defines the new parameters to be added.

// The splice() method returns an array with the deleted items.
cars.splice(2, 2, "Mercedes", "Audi");
console.log(cars);
