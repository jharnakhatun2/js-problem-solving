/*Task -1:
Find the lowest number in the array below.
const heights2 = [167, 190, 120, 165, 137];*/

const heights2 = [167, 190, 120, 165, 137];
function countLowestNumber(array) {
  if (Array.isArray(array) === false) {
    return "Enter an array as input";
  }
  let count = array[0];
  for (let item of array) {
    if (item < count) {
      count = item;
    }
  }
  return count;
}
const lowestNumber = countLowestNumber(23);
console.log(lowestNumber);




/*Task -2:
Find the friend with the smallest name.
const friends = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];*/
const friends = ["rahim", "robin", "rafi", "ron", "de", "rashed"];
function smallestName(array) {
  if (Array.isArray(array) === false) {
    return " enter array of string";
  }
  let count = array[0];
  for (const name of array) {
    if (name.length < count.length) {
      count = name;
    }
  }
  return count;
}
// const smallNameFriend = smallestName('jharna');
const smallNameFriend = smallestName(friends);
console.log(smallNameFriend);





/*Task-3:
Your task is to calculate the total budget required to buy electronics:

    laptop = 35000 tk
    tablet = 15000 tk
    mobile = 20000 tk
Write a JavaScript function named calculateElectronicsBudget that takes in the number of laptop, tablets, and mobile and returns the total money required.*/
function calculateElectronicsBudget(
  laptopQuantity,
  tabletsQuantity,
  mobileQuantity
) {
  if (
    typeof laptopQuantity !== "number" ||
    typeof tabletsQuantity !== "number" ||
    typeof mobileQuantity !== "number"
  ) {
    return "Please enter valid quantity as number.";
  }
  const laptop = 35000;
  const tablet = 15000;
  const mobile = 20000;
  const laptopPrice = laptop * laptopQuantity;
  const tabletPrice = tablet * tabletsQuantity;
  const mobilePrice = mobile * mobileQuantity;
  const totalBudget = laptopPrice + tabletPrice + mobilePrice;
  return totalBudget;
}
const result = calculateElectronicsBudget(2, 4, "amar");
console.log(result);




/*Task-4:
You are given an array of phone objects, each containing information about the model, brand, and price. Your task is to write a JavaScript function named findAveragePhonePrice that takes this array as input and returns the average price of phone.

Input


    const phones = [
        { model: "PhoneA", brand: "Iphone", price: 95000 },
        { model: "PhoneB", brand: "Samsung", price: 40000 },
        { model: "PhoneC", brand: "Oppo", price: 26000 },
        { model: "PhoneD", brand: "Nokia", price: 35000 },
        { model: "PhoneE", brand: "Iphone", price: 105000 },
        { model: "PhoneF", brand: "HTC", price: 48000 },
    ];*/
const phones = [
  { model: "PhoneA", brand: "Iphone", price: 95000 },
  { model: "PhoneB", brand: "Samsung", price: 40000 },
  { model: "PhoneC", brand: "Oppo", price: 26000 },
  { model: "PhoneD", brand: "Nokia", price: 35000 },
  { model: "PhoneE", brand: "Iphone", price: 105000 },
  { model: "PhoneF", brand: "HTC", price: 48000 },
];
function findAveragePhonePrice(array) {
  if (!Array.isArray(array)) {
    return "Please enter valid array of object with price";
  }
  let sum = 0;
  for (const obj of array) {
    sum += obj.price;
  }
  const averagePriceOfPhone = sum / array.length;
  return Math.round(averagePriceOfPhone);
}
const averagePhonePrice = findAveragePhonePrice(phones);
// const averagePhonePrice = findAveragePhonePrice("phones");
console.log(averagePhonePrice);




/*Task -5: (Hard)
For each employee their current salary is calculated by multiplying yearly increment with experience then adding the result to the starting salary. Now calculate is the total salary has to be provided by the company in a month.

 const employees = [
            { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
            { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
            { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
            { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
        ];*/
        const employees = [
            { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
            { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
            { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
            { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
        ]
        function salaryCalculator(array){
            if (!Array.isArray(array)) {
                return "Please enter valid array of object";
              }
            let givenTotalSalary = 0 ;
            for(const employee of array){
                const currentSalary  =   (employee.increment * employee.experience) + employee.starting;
                givenTotalSalary += currentSalary ;
            }
            return givenTotalSalary;
        }
       const totalSalary = salaryCalculator(employees);
        console.log(totalSalary);