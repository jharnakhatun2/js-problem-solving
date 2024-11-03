
// Calculate the total cost of the products in a shopping cart
const products = [
    {name: 'Shampoo', price: 300},
    {name: 'Chiruni', price: 100},
    {name: 'Shirt', price: 700},
    {name: 'Pant', price: 1200}
]
function calculateProductPrice(products){
    let totalPrice = 0;
for(const product of products){
    totalPrice += product.price;
}
return totalPrice;
}
const cartPrice = calculateProductPrice(products);
console.log("Total product price : " , cartPrice);


// Calculate the total cost of the products with quantity in a shopping cart
const productWithQuantity = [
    {name: 'Shampoo', price: 300, quantity: 3 },
    {name: 'Chiruni', price: 100, quantity: 1 },
    {name: 'Shirt', price: 700, quantity: 2 },
    {name: 'Pant', price: 1200, quantity: 2}
]
function calculateShoppingCart(products){
    let totalPrice = 0;
for(const product of products){
    totalPrice += product.price * product.quantity;
}
return totalPrice;
}
const totalCartPrice = calculateShoppingCart(productWithQuantity);
console.log("Total product price with quantity: " , totalCartPrice);

