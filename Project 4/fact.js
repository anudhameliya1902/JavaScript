

function clic(){

    let a=document.getElementById("v1").value
    

    function fact(a){
        let sum =1;
        for(let x=1; x<=a; a++)
        {
            sum*=x;
        }
        return sum;

    }

    document.getElementById("h").innerText = "This is factorial = "+fact(a);




}
