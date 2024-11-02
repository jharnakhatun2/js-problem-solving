// Convert inch to feet
// 12 inch  = 1 feet
function inchToFeet(inch) {
    const feet = inch / 12 ;
    const feetInteger = parseInt(feet);
    const restInteger = inch % 12;
    const result = feetInteger + ' Feet ' + restInteger + ' inch';
    return result;
}
const result = inchToFeet(50);
console.log(result);