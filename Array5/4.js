
let a =[1, 2, -3, 4, -5]


function findIndexOfFirstNegative (number){

    for(let x=0; x<number.length; x++)
    {
        if(number[x]<0){

            return x;
        }

    }

}

console.log(findIndexOfFirstNegative(a))