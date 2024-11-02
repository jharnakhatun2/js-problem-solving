// Task-1
// Take four parameters. Multiply the four numbers and then return the result
function multiplyNumbers(n1, n2, n3, n4) {
  const result = n1 * n2 * n3 * n4;
  return result;
}
const multiply = multiplyNumbers(2, 5, 6, 7);
console.log(multiply);

// Task-2
// Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.

function calculateNum(num) {
  let result = 0;
  if (num % 2 !== 0) {
    result = num * 2;
    return result;
  }
  if (num % 2 === 0) {
    result = num / 2;
    return result;
  }
}
const number = calculateNum(16);
console.log(number);

// Task-3
// Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.
const arr = [2, 5, 6, 3];

function average(total, sum) {
  return sum / total;
}

function make_avg(array) {
  const total = array.length;
  const sumOfArray = array.reduce((total, current) => {
    return total + current;
  }, 0);

  console.log(sumOfArray);
  return average(total, sumOfArray);
}

const result2 = make_avg(arr, average);
console.log(result2);

// Task-4
// Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.

function count_zero(binaryNum) {
  let count = 0;
  for (let num of binaryNum) {
    if (num === "0") {
      count++;
    }
  }

  return count;
}
const resA = count_zero("16546865314530000002514896412323000");
console.log(resA);

// Task-5
// Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return Even. If odd return Odd
function odd_even(int) {
  if (int % 2 === 0) {
    return `${int} is Even`;
  } else {
    return `${int} is Odd`;
  }
}
const resB = odd_even(8);
console.log(resB);
