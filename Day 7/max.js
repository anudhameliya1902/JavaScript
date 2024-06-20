
function anu()
{

    let a= parseInt(document.getElementById("f").value) 
    let b= parseInt(document.getElementById("s").value) 
    let c= parseInt(document.getElementById("t").value)


    console.log(a);
    console.log(b);
    console.log(c);

        if(a<b && a<c){
            document.getElementById("min").value=a;
            console.log(a);
        }else if(b<c){
            document.getElementById("min").value=b;
            console.log(b);
        }else{
            document.getElementById("min").value=c;
            console.log(c);
        }
        
        if(a>b && a>c){
            document.getElementById("max").value=a;
            console.log(a);
        }else if(b>c){
            document.getElementById("max").value=b;
            console.log(b);
        }else{
            document.getElementById("max").value=c;
            console.log(c);
        }

   


}


//  anu()