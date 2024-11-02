//Remove duplicate items from an array
const numbers = [9, 5, 6, 1, 22, 8, 9, 5, 78, 12, 4, 96, 24, 3];
function noDouble(arr) {
  const uniqueArr = [];
  for (let item of arr) {
    if (uniqueArr.includes(item) === false) {
      uniqueArr.push(item);
    }
  }
  return uniqueArr;
}
const result = noDouble(numbers);
console.log(result);
