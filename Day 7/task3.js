
function anu()
{   
    var a=parseInt(document.getElementById("f").value)
    var b;
    var c;


if(a<=50)
    {
        b=(a*0.50);
        c=(b*20/100)+b;
        document.getElementById("res").innerText= c;
        console.log(c);
    }

else if(a>50 && a<=150)
    {
        b=(50*0.50)+ (a-50)*0.75;
        c=(b*20/100)+b;
        document.getElementById("res").innerText= c;
    }
else if(a>150 && a<=250)
        {
            b=(50*0.50)+(100*0.75)+(a-150)*1.20;
            c=(b*20/100)+b;
            document.getElementById("res").innerText= c;
        }
else if(a>250)
            {
                b=(50*0.50)+(100*0.75)+(100*1.20)+(a-250)*1.50;
                c=(b*20/100)+b;
                document.getElementById("res").innerText= c;
            }

}