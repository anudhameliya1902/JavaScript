

let a= ["apple", "banana", "pear"]


let data =a.filter((ele,ind)=>{


    if(ele.length>3){

        return ele
    }

})

console.log(data);

