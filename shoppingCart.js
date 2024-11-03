
// Calculate the total cost of the products in a shopping cart
const products = [
    {name: 'Shampoo', price: 300},
    {name: 'Chiruni', price: 100},
    {name: 'Shirt', price: 700},
    {name: 'Pant', price: 1200}
]
function calculateShoppingCart(products){
    let totalPrice = 0;
for(const product of products){
    totalPrice += product.price;
}
return totalPrice;
}
const cartPrice = calculateShoppingCart(products);
console.log("Total product price : " , cartPrice);