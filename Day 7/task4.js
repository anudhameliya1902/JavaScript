
function anu()
{


var a =parseInt(document.getElementById("f").value)

if(a>0)
    {
        document.getElementById("res").innerText = "This is Positive Number";
    }
else if(a<0)
    {
        document.getElementById("res").innerText = "This is Negative Number";

    }
    else{
        document.getElementById("res").innerText = "This Neutral";

    }
}