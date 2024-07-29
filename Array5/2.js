
let a =[1, 2, 3, 4, 5, 6]

function filterEvenNumbers(arr){

    let ans = arr.filter((ele)=>{

        if(ele%2==0){

            return ele;
        }
    })
    return ans;

} 
console.log(filterEvenNumbers(a))