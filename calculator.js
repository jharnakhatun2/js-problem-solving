function add(num1, num2) {
  const sum = num1 + num2;
  return sum;
}
function subtract(num1, num2) {
  const subtraction = num1 - num2;
  return subtraction;
}
function multiply(num1, num2) {
  const mul = num1 * num2;
  return mul;
}
function division(num1, num2) {
  const div = num1 / num2;
  return div;
}

function calculator(a, b, operation) {
  switch (operation) {
    case "add":
      const addition = add(a, b);
      return addition;
      
    case "subtraction":
      const sub = subtract(a, b);
      return sub;
      
    case "multiply":
      const multiplication = multiply(a, b);
      return multiplication;
      
    case "division":
      const division2 = division(a, b);
      return division2;
      
      default:
        return "only 'addition', 'subtraction', 'multiply','division' operation is allowed";
  }
}
const calculatorRes = calculator(35, 7, "division");
console.log(calculatorRes);
