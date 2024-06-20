// Question: Determine the compound interest for $7000 at 5% compounded annually for 2 years.

var p=7000;
var r=5;
var n=2;


var fi;
fi = (p*r/100)+p;

console.log(fi);

var si;
si = (fi*r/100)+fi;
console.log(fi);

var ti;

ti= si-p;

console.log(ti);


