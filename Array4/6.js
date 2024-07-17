 let a=[2, 3, 4, 5, 6, 7, 8, 9]


 let ans = a.map((ele)=>{


    if(ele%2!=0)
    {
        return ele*2;
    }
    else{
        return ele;
    }

 })

 console.log(ans);