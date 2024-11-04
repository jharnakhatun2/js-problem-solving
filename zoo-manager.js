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
    if(typeof name !== 'string'){
        return 'invalid ';
    }
const lastChar = name[name.length - 1].toLowerCase();
  if (lastChar === "a") {
    console.log("Good Name");
  } else if (lastChar === "y") {
    console.log("Good Name");
  } else if (lastChar === "i") {
    console.log("Good Name");
  } else if (lastChar === "e") {
    console.log("Good Name");
  } else if (lastChar === "o") {
    console.log("Good Name");
  } else if (lastChar === "u") {
    console.log("Good Name");
  } else if (lastChar === "w") {
    console.log("Good Name");
  } else {
    console.log("Bad Name");
  }
}
const result = checkName('Salman');
console.log(result);



// Problem 03 : Virus in my Array
const input =[1, null, undefined, 18, -19, NaN, "12", [1, 2], { ob: "lala" }] ;
function deleteInvalids(numbers){
    if(!Array.isArray(numbers)){
        return 'Please provide a valid array';
    }
    let arr = [];
    for(const number of numbers){
        if(typeof number === 'number' && Number.isNaN(number) === false){
            arr.push(number);
        }
    }
    return arr;
}
const virus = deleteInvalids(["1" , {num:2} , NaN ] );
console.log(virus);



// Problem 04 : Make A Great Password
function password(object){
   if(!object.siteName || !object.birthYear || !object.siteName){
    return 'Error: Missing required properties!!!'
   }
   if(typeof object.birthYear !== 'number' || object.birthYear.toString().length !== 4){
    return "Error : birthYear must be a four-digit number"
   }
   const siteName = object.siteName.charAt(0).toUpperCase()+ object.siteName.slice(1)
   const password = siteName + '#' + object.name + '@' + object.birthYear
   return password;

}
const pass = password({ name: "kolimuddin" , birthYear: 1999 , siteName: "google" });
//const pass = password({ name: "toky", birthYear: 200, siteName: "Facebook" } );
console.log(pass);





