


function add()
{
    let a=document.getElementById("year").value
    console.log(a);
    
    if((a%4==0 && a%100!=0) || a%400==0)
        {
            document.getElementById("ans").innerText ="This is Leap Year"
        }
        else{
            document.getElementById("ans").innerText ="This is not leap Year"

        }
}


function age (){

    let a= document.getElementById("ag").value

    if(18<=a){
        document.getElementById("ans").innerHTML ="You Can Vote"
    }
    else{
        document.getElementById("ans").innerHTML ="You Can Not Vote"

    }
}



function temp (){
    let a= document.getElementById("Tem").value

    if(30<=a)
        {
            document.getElementById("ans").innerHTML ="Temperature Is Hot"

        }
    else{
        document.getElementById("ans").innerHTML ="Temperature Is Moderate"

    }

}


function max(){

    var a=parseInt(document.getElementById("f").value)
    var b=parseInt(document.getElementById("s").value)
    var c=parseInt(document.getElementById("t").value)


    if(a>b && a>c)
        {
            console.log(a);
            document.getElementById("ans").innerHTML = value=a;
        }
    else if(b>c)
        {
            console.log(b);
            document.getElementById("ans").innerHTML = value=b;;

        }
    else{
        console.log(c);
        document.getElementById("ans").innerHTML = value=c;

    }
}

function eve(){

    var a=parseInt(document.getElementById("f").value)

    if(a%2==0)
        {
        document.getElementById("ans").innerHTML = "This number is = even"
        }
    else{
        document.getElementById("ans").innerHTML = "This Number is = odd"
    }
}


function int(){
        var a=parseInt(document.getElementById("p").value)
        var b=parseInt(document.getElementById("r").value)
        var c=parseInt(document.getElementById("n").value)

        var d;

        d=a*b*c/100;


        if(a>0 && b>0 && c>0)
            {
                document.getElementById("ans").innerHTML = value=d;
            }
        else{
            alert("Please All Input Positive Number")
        }
}

function vowl (){


    var a= document.getElementById("f").value

    if(a=="a" || a=="e" || a=="i" || a=="o" || a=="u")
    {
        document.getElementById("ans").innerHTML ="This is vowel"
    }
    else {
        document.getElementById("ans").innerHTML ="This is consonant"
    }
}

function acc(){

    var a = parseInt(document.getElementById("f").value)


    if (a>=13)
        {
            document.getElementById("ans").innerHTML ="granting access"

        }
    else {
        document.getElementById("ans").innerHTML ="denying  access"

        }
}

function div (){
    var a = parseInt(document.getElementById("f").value)

    if(a%3==0 && a%5==0)
    {
        document.getElementById("ans").innerHTML ="This number is divisible by 3 And 5"
    }
    else{
        document.getElementById("ans").innerHTML ="This number is Not divisible by 3 And 5"

    }
    
}


function pss(){

    var p="123456"


    var a = document.getElementById("f").value


    if(a==p)
        {
            alert("your Password is right")
        }
    else{
        alert("your Password is wrong")
        var n= prompt("Change Your Password")
        n==p;
    }
}