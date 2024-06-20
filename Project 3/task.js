
function anu ()
{
    let a= parseInt(document.getElementById("f").value)

    var sum=0;


    for(var b=1; b<=a; b++)
        {

            if(b%2==0)
                {
                    sum=sum+b
                }
        }

        console.log(sum);
        document.getElementById("res").innerText =sum;

}
