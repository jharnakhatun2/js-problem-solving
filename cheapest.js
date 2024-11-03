// Find the cheapest phone from an array of phone objects

const mobiles = [
    {name: 'Samsung', price: 20000, camera: '12mp', color: 'black'},
    {name: 'xoami', price: 18000, camera: '12mp', color: 'black'},
    {name: 'Oppo', price: 30000, camera: '12mp', color: 'black'},
    {name: 'Iphone', price: 1000000, camera: '12mp', color: 'black'},
    {name: 'Walton', price: 31000, camera: '12mp', color: 'black'},
    {name: 'HTC', price: 27000, camera: '12mp', color: 'black'}
]

function cheapestPhone(phones){
    let cheap = phones[0];
for(let phone of phones){
    if(phone.price < cheap.price){
        cheap = phone
    }
}
return cheap;
}
const cheap = cheapestPhone(mobiles);
console.log("The Cheapest Phone :", cheap);