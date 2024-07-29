let images = [
    "https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-nature-mountain-scenery-with-flowers-free-photo.jpg?w=2210&quality=70",
    "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?cs=srgb&dl=pexels-souvenirpixels-417074.jpg&fm=jpg",
]


let a1 = document.querySelector("#prev");
let a2 = document.querySelector("#next");
 
a1.addEventListener("click",x1);
a2.addEventListener("click",x2);

let a=0;

document.querySelector("#image").innerHTML = `<img src ="${images[a]}" alt=${images[a]}/>`



function x1(){
console.log(a);
document.querySelector("#image").innerHTML = `<img src ="${images[a]}" alt=${images[a]}/>`

if(a>0){
    a--;
}
else{
    a = images.length-1;
}
}


function x2(){

console.log(a);
document.querySelector("#image").innerHTML = `<img src ="${images[a]}" alt=${images[a]}/>`
if(a<images.length-1){
    a++
}
else{
    a=0;
}
}

