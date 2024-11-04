// Problem-01 : Help The Zoo Manager
function calculateMoney(ticketQuantity) {
  if (ticketQuantity <= 0) {
    return " Invalid number";
  }
  const eachTicket = 120;
  const ticketSellPrice = eachTicket * ticketQuantity;
  const securityGard = 500;
  const lunch = 50 * 8;
  const totalCost = securityGard + lunch;
  const total = ticketSellPrice - totalCost;
  return total;
}
const calMoney = calculateMoney(93);
console.log(calMoney);

// Problem-02: Good Name , Bad Name
function checkName(name) {
 
  if (name[name.length - 1] === "a") {
    console.log("Good Name");
  } else if (name[name.length - 1] === "y") {
    console.log("Good Name");
  } else if (name[name.length - 1] === "i") {
    console.log("Good Name");
  } else if (name[name.length - 1] === "e") {
    console.log("Good Name");
  } else if (name[name.length - 1] === "o") {
    console.log("Good Name");
  } else if (name[name.length - 1] === "u") {
    console.log("Good Name");
  } else if (name[name.length - 1] === "w") {
    console.log("Good Name");
  } else {
    console.log("Bad Name");
  }
}
const result = checkName("nurul");
console.log(result);
