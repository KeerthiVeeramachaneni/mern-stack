//1
let name = "Keerthi"; 
 let age = 20; 
 let city = "Vizag";
 let isStudent = true; 
 let nullValue = null;
 let undefinedValue = undefined;

//2
let pi = 3.14159;

//3
let greeting = "Hello, world!";

//4
let isSunny = true; 

//5
let favoriteNumber = 7; 


//DATATYPES
//1
console.log(typeof pi); // Output: number
console.log(typeof greeting); // Output: string
console.log(typeof isSunny); // Output: boolean
console.log(typeof favoriteNumber); // Output: number

//2
let mixedValue = "Hello, I am " + 25 + " years old and it's " + true + " that I'm happy!";


//3
console.log(typeof mixedValue); // Output: string


//OPERATORS
//1
let a = 10;
let b = 3;

console.log(a + b); // Addition: 13
console.log(a - b); // Subtraction: 7
console.log(a * b); // Multiplication: 30
console.log(a / b); // Division: 3.333...
console.log(a % b); // Modulus (remainder): 1
console.log(a ** b); // Exponentiation: 1000

//2
let x = 5;
let y = 3;

console.log(x == y); // Equal to: false
console.log(x != y); // Not equal to: true
console.log(x > y); // Greater than: true
console.log(x < y); // Less than: false
console.log(x >= y); // Greater than or equal to: true
console.log(x <= y); // Less than or equal to: false


//3
let p = true;
let q = false;

console.log(p && q); // AND: false
console.log(p || q); // OR: true
console.log(!p); // NOT: false


//4
let age = 25;
let status = (age >= 18) ? "adult" : "minor";
console.log(status); // Output: "adult"


//ADDITIONAL TASKS
//1
let temperature = 80;

//2
let celsius = (temperature - 32) * 5/9;

//3
console.log(`Temperature in Celsius: ${celsius}`);

//4
let age = 25;

//5
if (age < 18) {
  console.log("Minor");
} else if (age >= 18 && age < 65) {
  console.log("Adult");
} else {
  console.log("Senior Citizen");
}





