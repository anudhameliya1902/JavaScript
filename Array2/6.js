
var a=[]

a.push("jan","Feb","Mar","Apr","May","June","July","Aug","Sep","Oct","Nov","Dec")

a.splice(9,12)
for(let x=0; x<a.length; x++)
{
    console.log(a[x]);
}