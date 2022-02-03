let car = "Peugeot"; // one value assigned to a variable

const person = { // several values assigned to a variable
    firstName: "Jonah", // properties
    lastName: "Theussl", // written as name:value pairs
    fullName: function() {
        return this.firstName + " " + this.lastName // this refers to the person object
    },
    age: 18, 
    eyeColour: "Brown",
    firstNationality: "French",
    secondNationality: "Canadian"
}; // Object
/*
    In an object, "this" refers to the object
    Alone, "this" refers to the global object
    In a function, "this" refers to the global object
    In a function, in strict mode, "this" is undefined
    In an event, "this" refers to the element that received the event
    Methods like call(), apply(), and bind() can refer "this" to any object

    In the above example:
    "this" refers to the owner of the function, here the person object that "owns" the fullName function
    In other words, this.firstName means the firstName property of this object
*/

console.log(person);

//accessing object properties
console.log(person.age);
console.log(person["secondNationality"]);
console.log(person.fullName()) // accessing an object method