// 1. Write a function that can print any random number between any two given numbers (including them)

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(getRandomNumber(1, 6));

// 2. How can you order names of students in your class sequentially?
const students = ["Jharna", "Khatun", "Abir", "Monir", "Shakib"];
students.sort();
console.log(students);

// 3. How can you order roll numbers of students in your class sequentially?
const rollNo = [3, 5, 1, 6, 2, 30];
rollNo.sort((a, b) => a - b);
console.log(rollNo);

//4. Write a function that can tell us whether an year is a leap year or not.
function isLeapYear(year) {
  if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
    console.log(`${year} is leap year`);
  } else {
    console.log(`${year} is not leap year`);
  }
}
isLeapYear(2024);

// 5.  How would you determine the number of vowels in a sentence?
const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
function totalVowelNumber(sentence) {
    let count = 0;
    const letters = Array.from(sentence);
    letters.forEach(function(value) {
        if(vowels.includes(value)){
            count++;
        }
    })
    return count;
}
console.log(totalVowelNumber("Bangladesh is a Golden Country among world"))