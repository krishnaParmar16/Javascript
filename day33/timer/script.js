

function check()
{
let time=document.getElementById("time").value;

    let id = setInterval(()=>{

        if(time < 0)
        {
            clearInterval(id);
            
        }
        else{
           document.getElementById("count").innerText=`${time--}s`;
            // console.log(time--);
        }
    
    },1000)



    // let a=setInterval(()=>{
    //     if(time>0)
    //     {
    //         document.getElementById("count").innerText=time +"s";
    //         time--;
    //     }
    //     else{
    //         clearInterval(a);
    //     }
    // },1000)
    
    
}

