

    let a=[1,2,3,4,5,6,7,8,9,10]

let data = a.map((element,index)=>{

    if(isPrime(element)==true)
    {
        console.log(element);
    }


})

function isPrime(num){
    let count =0;

    for(let x=0; x<=num; x++)
        {
            if(num%x==0){

                count++
            }
        }
        
        if(count==2)
        {
            return true;
        }
        else{
            return false;
        }
    }