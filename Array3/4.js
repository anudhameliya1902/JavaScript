

let  a = ['a', 'b', 'c', 'd']

let data = a.map((ele,ind)=>{


    if(ele=='b')
    {
        return ele='z';
    }
    else{
        return ele;
    }


})


console.log(data);
