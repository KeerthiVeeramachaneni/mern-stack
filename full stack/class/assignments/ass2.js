//## Return Statement
// 1. Create a function calculateArea that takes the length and width of a rectangle as parameters. Calculate the area and return it.
function calculateArea(length, width) {
    return length * width;
}

// 2. Write a function factorial that takes a number as input and calculates its factorial using a recursive approach. Return the result.
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

//3. Define a function greet that takes a name as input and returns a greeting message.
function greet(name) {
    return Hello, ${ name } !;
}

//## Functions Declarations vs Expressions
//1. Create a function declaration sayHello that logs "Hello, world!" to the console.
function sayHello() {
    console.log("Hello, world!");
}

//2. Write a function expression greetUser that takes a name as input and logs a personalized greeting message.
const greetUser = function (name) {
    console.log(Hello, ${ name }!);
}

//3. Explain the difference between function declarations and expressions in terms of hoisting and scope.
/*Difference Between Function Declarations and Function Expressions:
Function Declarations:

These are hoisted to the top of their scope, which means they can be invoked before they are defined in the code.
Example: In the case of sayHello, you can call sayHello() anywhere within its scope, even before the declaration appears in the code.
Function Expressions:

These are not hoisted in the same way as declarations. The variable holding the function is hoisted, but not the function itself. This means you cannot call greetUser before the line where it is defined.
Example: greetUser("John") will only work if the function expression has already been assigned, otherwise it will result in an error*/

## Anonymous Functions
//1. Create an anonymous function that takes two numbers as input and returns their sum.
const sum = function (a, b) {
    return a + b;
};

//2. Use an anonymous function as a callback for the setTimeout function to log a message after a delay.
setTimeout(function () {
    console.log("This message is displayed after a 2-second delay.");
}, 2000);

//3. Explain the concept of anonymous functions and their common use cases.
As callbacks: Anonymous functions are often used in callbacks, such as in setTimeout, event handlers, and array methods like map, filter, and forEach.Example:
[1, 2, 3].forEach(function (num) {
    console.log(num);
});
Immediately Invoked Function Expressions(IIFE): Used to execute a function as soon as it is defined.Example:
(function () {
    console.log("This runs immediately!");
})();

//Arrow Functions
//1. Write an arrow function double that takes a number as input and returns its double.
const double = (num) => num * 2;

//2. Create an arrow function greet that takes a name as input and returns a greeting message.
const greet = (name) => Hello, ${ name }!;

//3. Use arrow functions in a forEach loop to iterate over an array and perform an operation on each element.
const numbers = [1, 2, 3, 4, 5];

numbers.forEach((num) => {
    console.log(Double of ${ num } is ${ num * 2});
});



//Coding Exercises
//1. Write a function isPrime that determines if a given number is prime.
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

//2. Create a function reverseString that reverses the characters of a given string.
function reverseString(str) {
    return str.split('').reverse().join('');
}


//3. Implement a function fibonacci that calculates the nth Fibonacci number.
function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}



//Functions Calling Other Functions
//1. Write a function calculateTotalPrice that calculates the total price of a shopping cart by calling a calculateItemPrice function for each item.
function calculateItemPrice(item) {
    return item.price * item.quantity;
}

function calculateTotalPrice(cart) {
    let total = 0;
    cart.forEach(item => {
        total += calculateItemPrice(item);
    });
    return total;
}


//2. Create a function formatPhoneNumber that formats a phone number using helper functions for area code, prefix, and suffix.
function getAreaCode(phoneNumber) {
    return phoneNumber.slice(0, 3);
}

function getPrefix(phoneNumber) {
    return phoneNumber.slice(3, 6);
}

function getSuffix(phoneNumber) {
    return phoneNumber.slice(6);
}

function formatPhoneNumber(phoneNumber) {
    return (${ getAreaCode(phoneNumber) }) ${ getPrefix(phoneNumber) } -${ getSuffix(phoneNumber) };
}


//3. Explain the benefits of breaking down complex tasks into smaller, reusable functions.
Improved Readability: By breaking down complex tasks into smaller functions, the code becomes easier to read and understand.Each function performs a clear, specific task, making the logic of the program more transparent.

    Reusability: Smaller functions can be reused in different parts of the program or in other projects.This reduces duplication and allows for more efficient development.

        Maintainability: If a bug arises, it's easier to isolate and fix it within a smaller function. Changes can be made to individual parts without affecting the entire system.

Testability: Testing smaller, independent functions is simpler.You can write unit tests for each function to ensure that every part of the application works correctly.


//Reviewing Functions
//1. Review the provided code examples and identify any potential improvements or optimizations.
function formatPhoneNumber(phoneNumber) {
    return (${ phoneNumber.slice(0, 3) }) ${ phoneNumber.slice(3, 6) } -${ phoneNumber.slice(6) };
}
/*Improvement: Adding validation to ensure the phone number is the correct length (10 digits) would make the function more robust.*/
//2. Discuss the importance of writing clean, well-structured, and efficient functions.
/*Readability and Maintainability:
Clean and well-structured functions are easier to read and understand. When someone else (or you in the future) looks at the code, they can quickly comprehend the purpose and logic behind each function. This reduces cognitive load and makes it easier to maintain the code over time.
Reusability:
Breaking down tasks into smaller, focused functions allows for more reusable code. Well-structured, reusable functions reduce redundancy and make the code base more flexible, allowing the same code to be used in multiple parts of the application or in different projects.
Debugging and Testing:
Clean code is easier to debug because the logic is clear, and issues can be isolated more easily. When functions are small and single-purpose, unit testing becomes simpler. You can test each function individually to ensure that every part of the system works as expected.
Scalability:
Writing efficient functions is crucial as programs grow in size and complexity. Optimized and well-structured code ensures the program runs efficiently, even as more features are added. Poorly written or inefficient code can slow down an application and make it difficult to scale.*/



//Arrays
//1. Create an array `fruits` containing the names of different fruits.
const fruits = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry', 'Fig'];


//2. Access and print the third element of the array.
console.log(fruits[2]); // Output: Cherry

//3. Add the element "banana" to the end of the array using the `push` method.
fruits.push('Banana');
console.log(fruits);

//4. Remove the first element from the array using the `shift` method.
fruits.shift();
console.log(fruits); // Output: ['Banana', 'Cherry', 'Date', 'Elderberry', 'Fig', 'Banana']


//5. Iterate over the array using a `for` loop and print each element.
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}


//Objects
//1. Create an object `person` with properties for name, age, and city.
const person = {
    name: 'John Doe',
    age: 30,
    city: 'New York'
};

//2. Access and print the value of the "age" property using both dot and square bracket notation.
console.log(person.age); // Output: 30 (dot notation)
console.log(person['age']);


//3. Add a new property "occupation" to the object and assign a value.
person.occupation = 'Software Engineer';
console.log(person);

//4. Create an object `car` with properties for make, model, and year.
const car = {
    make: 'Toyota',
    model: 'Corolla',
    year: 2015
};


//5. Define a method `startEngine` on the `car` object that logs a message.
car.startEngine = function () {
    console.log('The engine is started.');
};

car.startEngine();



//Iteration
//1. Use a `for` loop to print numbers from 1 to 10.
for (let i = 1; i <= 10; i++) {
    console.log(i);
}


//2. Use a `while` loop to calculate the factorial of a given number.
function factorial(n) {
    let result = 1;
    let i = 1;
    while (i <= n) {
        result *= i;
        i++;
    }
    return result;
}

console.log(factorial(5));


//3. Explain the difference between `for` and `while` loops.
/*For Loop:

- Used when you know the number of iterations in advance.
- Automatically initializes and increments a counter variable.

While Loop:

- Used when you don't know the number of iterations in advance.
    - Requires manual initialization and incrementing of a counter variable.*/



//Behind the Scenes
//1. Discuss the concept of global and local variables.
/*Global Variables:

- Declared outside of any function or block.
- Accessible from anywhere in the code.
- Remains in memory for the lifetime of the program.

Local Variables:

- Declared inside a function or block.
- Only accessible within that function or block.
- Removed from memory when the function or block finishes executing.


//2. Provide examples of how variable scope can affect program behavior.
//1.Global Variable Overwrite

let x = 10; // global variable

function foo() {
    x = 20; // overwrites global variable
}

foo();
console.log(x); // outputs 20*/


//2.Local Variable Shadowing


let x = 10; // global variable

function foo() {
    let x = 20; // local variable shadows global variable
    console.log(x); // outputs 20
}

foo();
console.log(x); // outputs 10


//3.Variable Hoisting

console.log(x); // outputs undefined
var x = 10; // variable hoisting

function foo() {
    console.log(x); // outputs undefined
    var x = 20; // variable hoisting
}

foo();



//3. Explain the concept of hoisting and its implications.
console.log(x); // outputs: undefined
var x = 10;

// Hoisting equivalent:
var x;
console.log(x); // outputs: undefined
x = 10;



//Scope of the Variables Cont.
//1. Create nested functions and demonstrate how variables are accessed from different scopes.
function outer() {
    let x = 10; // outer scope variable

    function inner() {
        let y = 20; // inner scope variable
        console.log(x); // accesses outer scope variable
        console.log(y); // accesses inner scope variable
    }

    inner();
    console.log(y); // ReferenceError: y is not defined
}

outer();

//2. Explain the use of `let` and `const` keywords for block-scoped variables.
// Using let
let x = 10;
if (true) {
    let x = 20; // new scope, new variable
    console.log(x); // 20
}
console.log(x); // 10

// Using const
const y = 30;
if (true) {
    const y = 40; // new scope, new constant
    console.log(y); // 40
}
console.log(y); // 30



/*3. Discuss the importance of understanding variable scope for writing clean and maintainable code.
--Understanding variable scope is crucial for writing clean and maintainable code because:

1. Avoids Naming Conflicts: Scope helps prevent naming conflicts between variables, reducing errors and making code easier to understand.

2. Reduces Global Variable Pollution: By limiting variables to their intended scope, you avoid cluttering the global namespace and making code harder to maintain.

3. Improves Code Readability: Scope makes code more readable by clearly defining where variables are accessible, reducing confusion and errors.

4. Helps Catch Errors: Understanding scope helps catch errors due to unintended variable reassignment or access, making debugging easier.

5. Enhances Code Organization: Scope promotes modular, organized code by containing variables within their relevant blocks or functions.

6. Supports Team Collaboration: Clear variable scope makes code more understandable for team members, facilitating collaboration and maintenance.*/




## Hoisting: Variables, Functions
//1. Demonstrate how function declarations are hoisted to the top of their scope.
console.log(foo()); // Outputs: "Hello!"

function foo() {
    return "Hello!";
}

// Equivalent code after hoisting:
function foo() {
    return "Hello!";
}
console.log(foo()); // Outputs: "Hello!"


//2. Explain the difference in hoisting behavior for variable declarations using `var`, `let`, and `const`.
console.log(x); // undefined (var)
console.log(y); // ReferenceError (let)
console.log(z); // ReferenceError (const)

var x = 10;
let y = 20;
const z = 30;

//3. Discuss the potential pitfalls of relying on hoisting and best practices for variable and function declarations.
Potential Pitfalls:

1. Unexpected behavior: Hoisting can lead to unexpected behavior if not understood properly.
2. Naming conflicts: Hoisting can cause naming conflicts if variables or functions with the same name are declared in different scopes.

Best Practices:

1. Declare variables and functions at the top of their scope: This helps avoid hoisting - related issues and makes code more readable.