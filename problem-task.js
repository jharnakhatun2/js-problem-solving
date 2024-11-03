// Task-1:
// Write a function to convert temperature from Celsius to Fahrenheit.
//°F = °C × (9/5) + 32
function celsiusToFahrenheit(celsius) {
    const fahrenheit = celsius * (9/5) +32;
    return `${Math.round(fahrenheit)}°F`;
}
const result = celsiusToFahrenheit(25);
console.log(result);


// Task-2:
// You are given an array of numbers. Count how many times the a number is repeated in the array.
// sample-input: numbers = [5,6,11,12,98, 5]
// find: 5
// output: 2

// sample-input:
// numbers = [5,6,11,12,98, 5]
// find: 25
// output: 0
const numbers = [5,6,11,12,98, 5];

function findNumber(array, element) {
    return array.reduce((count, item) => item === element ? count + 1 : count, 0);
}

const findResult = findNumber(numbers, 25);
console.log(findResult); ;


// Task-3:
// Write a function to count the number of vowels in a string.

// Task-4:
// Write a function to find the longest word in a given string.

// sample-input: I am learning Programming to become a programmer

// sample-output: Programming

// Task-5:
// Generate a random number between 10 to 20.