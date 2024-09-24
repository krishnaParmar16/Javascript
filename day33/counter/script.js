
let sec=0;
let min=0;
let h=0;
let a;

document.getElementById("start").addEventListener("click",()=>{

    a = setInterval(()=>{

        if(sec<60)
        {
           if(sec<9){
            sec++;
            document.getElementById("seconds").innerText="0"+sec;
           }
           else{
            sec++;
            document.getElementById("seconds").innerText=sec;
           }

        }
        else if(min<60){
          if(min<9)
          {
            sec=0;
            min++;
            document.getElementById("minute").innerText="0"+min;
          }
          else{
            sec=0;
            min++;
            document.getElementById("minute").innerText=min;
          }
        }
      else{
         if(h<9)
         {
          min=0;
          h++;
          document.getElementById("hour").innerText="0"+h;
         }
         else{
          min=0;
          h++;
          document.getElementById("hour").innerText=h;
         }
        }
    },500)

})


document.getElementById("stop").addEventListener("click",()=>{
    clearInterval(a)
    alert("counter stoped...")
})


document.getElementById("reset").addEventListener("click",()=>{
    clearInterval(a)
    sec=0;
    min=0;
    document.getElementById("seconds").innerText="00";
    document.getElementById("minute").innerText="00";
})