//Unit conversion
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

// mile to kilometer
// 1 mile = 1.60934 kilometer
function kilometerToMile(mile){
const kilo = mile * 1.60934;
return Math.round(kilo) + ' kilometer';
}
const res = kilometerToMile(20);
console.log(res);