let x= [1, 2, 3, 4, 5, 6, 7, 8];

let sum=0;

x.forEach((ele)=>{

    if(ele%2!=0)
    {
        sum=sum+ele;
    }

})

console.log(sum);