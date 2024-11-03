// Get maximum number between two
function getMax(num1, num2){
    if(num1 > num2){
        return `Big ${num1}`;
    }else{
        return `Big ${num2}`
    }
}
const max1 = getMax(12, 24);
console.log(max1);

// Get maximum between three
const jim = 82;
const tim = 76;
const kim = 99;

function maxOfThree(num1, num2, num3){
    if(num1 > num2 && num1 > num3){
        console.log(`${num1} is a Boss`);
    }else if(num2 > num1 && num2 > num3){
        console.log(`${num2} is a Boss`);
    }else{
        console.log(`${num3} is a Boss`);
    }
}
const maxThee = maxOfThree(jim, tim, kim);
console.log(maxThee);


// Get maximum between unlimited
const max = Math.max(85,92,14,75,105);
console.log(max);
