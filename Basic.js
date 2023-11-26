// 1. Write a JavaScript program to display the current day and time in the following format.
// Today is : Tuesday.

const today = new Date().getDay();
const day = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const result = day[today];
console.log(`Today is ${result}`);

// 2. Write a JavaScript program to print the current window contents.
function printContent() {
  window.print();
}

//3. Write a JavaScript program to get the current date.
// Expected Output :
// mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy
