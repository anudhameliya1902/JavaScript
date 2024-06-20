
function salary()
{
    var s=parseInt(document.getElementById("sal").value)

if(s<=10000)
    {
        document.getElementById("a1").innerText =s

        var i = s*5/100;

        document.getElementById("t1").innerText =i
    }

else if(s>=10001 && s<=50000)
    {
        var d=s-10000;
        var b=10000;
        var i1=b*5/100;

        document.getElementById("a1").innerText =b
        document.getElementById("a2").innerText =d


        var i = d*10/100;

        document.getElementById("t2").innerText =i
        document.getElementById("t1").innerText =i1

        
    }
else if(s>50001 && s<=100000)
    {
        var b=10000;
        var c=50000
        var d=s-b-c;

        document.getElementById("a1").innerText =b
        document.getElementById("a2").innerText =c
        document.getElementById("a3").innerText =d

        var i1=b*5/100;
        var i2=c*10/100;
        var i3=d*15/100;

        document.getElementById("t1").innerText =i1
        document.getElementById("t2").innerText =i2
        document.getElementById("t3").innerText =i3


    }

else if (s>100000)
        {
            var b=10000;
            var c=40000;
            var d=50000;
            var j=s-b-c-d
    
            document.getElementById("a1").innerText =b
            document.getElementById("a2").innerText =c
            document.getElementById("a3").innerText =d
            document.getElementById("a4").innerText =j
    
            var i1=b*5/100;
            var i2=c*10/100;
            var i3=d*15/100;
            var i4=j*20/100;
    
            document.getElementById("t1").innerText =i1
            document.getElementById("t2").innerText =i2
            document.getElementById("t3").innerText =i3
            document.getElementById("t4").innerText =i4
            
    
        }

}