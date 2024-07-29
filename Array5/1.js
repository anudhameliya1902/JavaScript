
function doubleAndAddIndex(arr){

  let ans = arr.map((ele,ind)=>{

      return ele*2+ind;

  })


  return ans;

}

console.log(doubleAndAddIndex([2,3,4]))