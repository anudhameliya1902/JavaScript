

function year(){

    var a = document.getElementById("year").value

    if(a%4==0)
        {
            document.getElementById("ans").innerHTML ="This is leap year"
        }
        else{
            document.getElementById("ans").innerHTML ="This is Not leap year"

        }

}

function mar(){

    var a = document.getElementById("mark").value


    if(a>=90 && a<=100)
        {
            document.getElementById("ans").innerHTML ="4.0"
        }
    else if(a>=80 && a<90)
        {
            document.getElementById("ans").innerHTML ="3.0"
        }
        else if(a>=70 && a<80)
            {
                document.getElementById("ans").innerHTML ="2.0"
            }
        else if(a>=60 && a<70)
                {
                    document.getElementById("ans").innerHTML ="1.0"
                }
        else if(a<60){
            document.getElementById("ans").innerHTML ="0.0"

        }
        else {
            document.getElementById("ans").innerHTML ="Wrong Input"

        }
}



function check(){

    var a=document.getElementById("s").value
    var b=document.getElementById("c").value
    var c=document.getElementById("l").value

    var d;

    d=a/2;

    if(a>50000 && b >700 &&  c< d)
        {
            document.getElementById("ans").innerHTML ="Eligible"

        }
    else {
        {
            document.getElementById("ans").innerHTML =" Not Eligible"

        }
    }

}


function max()
{
    var a=document.getElementById("r1").value
    var b=document.getElementById("r2").value
    var c=document.getElementById("n").value
    

    
    if(+c>=+a && +c<=+b)
        {
            document.getElementById("ans").innerHTML =" inclusive"

        }
    else{
        document.getElementById("ans").innerHTML =" Not in Range"

    }
}