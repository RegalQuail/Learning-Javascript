// Back-ticks syntax:
let greeting = `Hello World!`;

// Both single and double quotes can be used:
let sentence = `I'm often called "John"`;

// Multiline string:
let text = 
`The quick
brown fox
jumps over 
the lazy dog`;
console.log(text);

// Variable substitution:
let firstName = "John";
let lastName = "Doe";

let fullName = `Your full name is ${firstName} ${lastName} !`;
console.log(fullName);

// Expression substitution:
let price = 10;
let VAT = 0.25;

let total = `Total: ${(price * (1 + VAT)).toFixed(2)}`;
console.log(total);
