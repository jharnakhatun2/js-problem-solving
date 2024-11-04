function  calculateMoney(ticketQuantity){
if(ticketQuantity <= 0){
    return " Invalid number"
}
const eachTicket  = 120;
const ticketSellPrice = eachTicket * ticketQuantity;
const securityGard = 500;
const lunch = 50 * 8;
const totalCost = securityGard + lunch ;
const  total = ticketSellPrice - totalCost;
return total;
}
const calMoney =  calculateMoney(93);
console.log(calMoney);