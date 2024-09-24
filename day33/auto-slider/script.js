document.querySelector(".main").innerHTML=
`
       <button id="prev"><i class="fa-solid       fa-chevron-left"></i></button>
        <div id="slider"></div>
        <button id="next"><i class="fa-solid fa-chevron-right"></i></button>
`

let btn1=document.querySelector("#prev");
let btn2=document.querySelector("#next");

let img=[
    "https://cdn.pixabay.com/photo/2023/09/04/17/53/pelican-8233306_1280.jpg",
    "https://cdn.pixabay.com/photo/2023/03/24/14/23/lion-7874143_1280.jpg",
    "https://cdn.pixabay.com/photo/2024/08/24/14/42/elephant-8994442_1280.jpg",
    "https://cdn.pixabay.com/photo/2023/04/19/09/25/dog-7937282_1280.jpg",
    "https://cdn.pixabay.com/photo/2023/09/04/17/48/flamingos-8233303_1280.jpg",
    "https://cdn.pixabay.com/photo/2024/08/23/18/54/koala-8992580_1280.png",
   "https://cdn.pixabay.com/photo/2023/09/05/20/37/owl-8235801_1280.jpg"
]


btn1.addEventListener("click",prev);
btn2.addEventListener("click",next);

let a=0;

document.querySelector("#slider").innerHTML=`<img src="${img[0]}"  height="550px" width="1000px">`


function prev()
{
   if(a>0)
   {
     a--;
    document.getElementById("slider").innerHTML=`<img src="${img[a]}"  height="550px" width="1000px">`
   }
   else{
    a=img.length-1;
    document.getElementById("slider").innerHTML=`<img src="${img[a]}"  height="550px" width="1000px">`
   }
}

setInterval(next,3000);

function next()
{
    if(a<img.length-1)
    {
        a++;
        document.getElementById("slider").innerHTML=`<img src="${img[a]}"  height="550px" width="1000px">`
    }
    else{
        a=0;
        document.getElementById("slider").innerHTML=`<img src="${img[a]}"  height="550px" width="1000px">`
    }
}
