// 1. Write a JavaScript program to display the current day and time in the following format.
// Today is : Tuesday.

const today = new Date().getDay();
const day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const result = day[today];
console.log(`Today is ${result}`);