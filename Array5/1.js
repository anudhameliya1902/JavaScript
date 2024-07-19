
let num =[2, 3, 4]



function doubleAndAddIndex(arry){

let ans =arry.map((el,ind)=>{
  
     return el*2+ind

  })    

  return ans;
}

doubleAndAddIndex(num)

console.log(doubleAndAddIndex(num));
