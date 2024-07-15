

let a=[]

let sum=0;

a.push(99,45,55,45,88,55)

for(let x=0; x<a.length; x++)
{
    console.log(a[x]);
}

for(let y=0; y<a.length; y++)
{
    sum=sum+a[y]
}

let avg;

avg=sum/a.length;

console.log(avg);