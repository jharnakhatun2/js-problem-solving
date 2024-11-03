// Use add and multiplication to calculate wood requirements
// chair --> 3 cft
// table --> 10 cft
// bed --> 50 cft

function woodQuantity(chairQuantity, tableQuantity, bedQuantity){
const chairWood = 3;
const tableWood = 10;
const bedWood = 50;
const chairRequireWood = chairQuantity * chairWood;
const tableRequireWood = tableQuantity * tableWood;
const bedRequireWood = bedQuantity * bedWood;

const totalWood = chairRequireWood + tableRequireWood + bedRequireWood ;
return totalWood;
}
const wood = woodQuantity(0,5,0);
console.log(wood);