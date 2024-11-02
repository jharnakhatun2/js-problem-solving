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


// Check whether a year is a Leap Year or not
function isLeapYear(year){
    if(year % 4 === 0){
        if(year % 100 === 0){
            return (year % 400 === 0) ? `${year} is Leap Year` : `${year} is not Leap Year`;
        }
        return `${year} is Leap Year`;
    }
    return `${year} is not Leap Year`;
}
const isLeap = isLeapYear(1987);
console.log(isLeap);
