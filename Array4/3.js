
let a=[5, 10, 15, 20, 25, 30, 35, 40]

let data=a.filter((ind)=>{

    if(ind%2==0)
    {
        return ind;
    }
})

console.log(data);