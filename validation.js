//number validation
function multiply(num1, num2) {
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    return "Please enter a valid number";
  }
  const multi = num1 * num2;
  return multi;
}
const mul = multiply(5, [2, 1]);
console.log(mul);

//string validation
function fullName(first, last) {
  if (typeof first !== "string") {
    return "First name should be string";
  } else if (typeof last !== "string") {
    return "Last name should be string";
  }

  const full = first + " " + last;
  return full;
}
const name = fullName("Shohan");
console.log(name);

//object validation
function getPrice(product) {
  if (typeof product !== "object") {
    return "enter valid object with price";
  }

  const productPrice = product.price;
  return productPrice;
}
// const price = getPrice({name: 'toys', price: 100});
const price = getPrice(100);
console.log(price);


//Array validation
function getSecond(numbers){
    
    if(Array.isArray(numbers) === false){
        return 'Enter an array'
    }
  
    const second = numbers[1];
    return second;
}
// const sec = getSecond([1,2,3]);
const sec = getSecond('array');
console.log(sec);
