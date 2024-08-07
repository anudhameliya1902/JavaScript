
function checkNumber(a,b){



    if(a<0)
    {
        throw new Error ("Nagative Number")
    }

    return a;
}

checkNumber()
try{
    console.log(checkNumber(29));
}catch(err){
    console.log(err);
}finally{
    console.log("Code Completed");
}