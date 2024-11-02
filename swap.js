// Swap variable, swap without temp, destructing
let x = 9 ;
let y = 6 ;

console.log(x,y);
let temp = x;
x = y;
y = temp;
console.log(x,y);

// destructing
let a = 3 ;
let b = 9 ;
console.log(a, b);
[a,b] = [b,a];
console.log(a, b);