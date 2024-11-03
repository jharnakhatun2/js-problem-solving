// discount price calculation
// upto 100 --> 100 tk
// 101 to 200 --> 90 tk
// above 200 --> 70 tk

function discountCalculator(quantity){
    let total = 0;
    if(quantity <= 100){
        total = quantity * 100;
    }else if(quantity <= 200){
        total = quantity * 90
    }else{
        total = quantity * 70
    }
    return total;
}
const discount = discountCalculator(205);
console.log(discount);


// Multi-layer discount price calculation
// first 100 --> 100 tk
// 101 to 200 --> 90 tk
// above 200 --> 70 tk

function multiLayerDiscount(quantity){
    const first100Price = 100;
    const second100Price = 90 ;
    const above200Price = 70;

    let total = 0;

    if(quantity <= 100){
        const first100Total = first100Price * quantity;
        total = first100Total;
    }else if(quantity <= 200 ){
        const first100Total = first100Price * 100;
        const remainingQuantity = quantity - 100;
        const second100Total = second100Price * remainingQuantity;
        total = first100Total + second100Total;
    }else{
        const first100Total = first100Price * 100;
        const second100Total = second100Price * 100;
        const remainingQuantity = quantity - 200;
        const above200Total = above200Price * remainingQuantity;
        total = first100Total + second100Total + above200Total;
    }
    return total;
}
const discountLayer = multiLayerDiscount(205);
console.log(discountLayer);