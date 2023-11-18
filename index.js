// Write a function that can print any random number between any two given numbers (including them)

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min; 
}
console.log(getRandomNumber(1, 6));