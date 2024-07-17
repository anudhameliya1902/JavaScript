

let arr = [2, 5, 12, 15, 7, 20]

let data = arr.filter((ind)=>{

    if(ind>=10){
        
        return ind;
    }

})

// console.log(data)

data.forEach((ind)=>{

    console.log(ind*ind);

})