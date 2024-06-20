
function anu()
{


var a =parseInt(document.getElementById("f").value)

if(a>=90)
    {
        document.getElementById("res").innerText = "A";
    }
else if(a<=89 && a>=80)
    {
        document.getElementById("res").innerText = "B";

    }
else if(a<=79 && a>=70)
        {
            document.getElementById("res").innerText = "C";
    
        }
else if(a<=69 && a>=60)
            {
                document.getElementById("res").innerText = "D";
        
            } 
        else{
        document.getElementById("res").innerText = "F";

    }
}