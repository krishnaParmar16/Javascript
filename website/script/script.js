function view()
{
    document.querySelector("#slider1").innerHTML=
    `
    <button id="prev"><i class="fa-solid       fa-chevron-left"></i></button>
    <div id="s1"></div>
    <button id="next"><i class="fa-solid fa-chevron-right"></i></button>
    `

    let prev=document.getElementById("prev");
    let next=document.getElementById("next");

    let img=[
       "images/i1.gif",
       "images/i1.png",
       "images/i10.jpg",
       "images/i11.jpg",
       "images/i12.jpeg",
       "images/i13.jpeg",
       "images/i14.gif",
       "images/i15.png",
       "images/i2.gif",
       "images/i3.gif",
       "images/i4.jpg",
       "images/i5.gif",
       "images/i6.jpg",
       "images/i7.png",
       "images/i5.jpg",
       "images/i8.gif",
       "images/i8.jpg",
       "images/i9.gif"
    ]

    prev.addEventListener("click",fprev);
    next.addEventListener("click",fnext);


    let a=0;
     document.querySelector("#s1").innerHTML=`<img src="${img[0]}" class="i1">`

    function fprev()
    {
        if(a>0)
        {
            a--;
            document.querySelector("#s1").innerHTML=`<img src="${img[a]}" class="i1">`
        }
        else{
            a=img.length-1;
            document.querySelector("#s1").innerHTML=`<img src="${img[a]}" class="i1">`
        }
    }

    setInterval(fnext,3000);

    function fnext()
    {
        if(a<img.length-1)
        {
            a++;
            document.querySelector("#s1").innerHTML=`<img src="${img[a]}" class="i1">`
        }
        else{
            a=0;
            document.querySelector("#s1").innerHTML=`<img src="${img[a]}" class="i1">`
        }
    }

}
view()


