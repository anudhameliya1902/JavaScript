//Question: Determine the compound interest for $5000 at 6% compounded annually for 3 years.//

var principal =5000;
var rate = 6;
year = 3;

var fyear;
var syear;
var tyear;
var inter;


fyear=(principal*rate/100)+principal;
syear=(fyear*rate/100)+fyear;
tyear=(syear*rate/100)+syear;

inter =tyear-principal;

console.log(fyear);
console.log(syear);
console.log(tyear);

console.log(inter);


