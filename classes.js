// A class is a template for objects
/*
    class ClassName {
        constructor() { ... }
    }
*/

// Example
class Car { // Class named Car
    constructor(name, year) { // 2 initial properties: "name" and "year"
        this.name = name;
        this.year = year;
    }
}

// Use the class to create objects:
let myCar1 = new Car("Ford", 2014);
let myCar2 = new Car("Audi", 2019);

/*
    Class methods are created with the same syntax as object methods.
    Use the keyword class to create a class.
    Always add a constructor() method.
    Then add any number of methods.

    Syntax:
    
    class ClassName {
        constructor() { ... }
        method1() { ... }
        method2() { ... }
        method3() { ... }
    }
*/

// A "Person" class with an "age" method that returns the age of the person based on birth year:
class Person {
    constructor(name, birthYear) {
        this.name = name;
        this.birthYear = birthYear;
    }
    age() {
        let date = new Date();
        return date.getFullYear() - this.birthYear;
    }
}

let person = new Person("Jonah", 2004);
console.log(`${person.name} is ${person.age()} years old`);