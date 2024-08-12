// season
function season()
{
    let month=parseInt(document.getElementById("month").value);

    switch(month)
    {    
        case 12:
        case 1:
        case 2:
            document.getElementById("ans").innerText="Winter";
            break;
        
        case 5:
        case 6: 
            document.getElementById("ans").innerText="Summer";
            break;          

        case 3:
        case 4:
            document.getElementById("ans").innerText="Spring";
            break;    

        case 7:
        case 8:
        case 9:
            document.getElementById("ans").innerText="Monsoon";
            break;
           
        case 10:
        case 11:
            document.getElementById("ans").innerText="Autumn";
            break;
            
         default:
            document.getElementById("ans").innerText="Wrong input";   

    }
}

//  vowel or consonant

function result()
{
    let char=document.getElementById("char").value;

    switch(char)
    {
        case "a":
        case "e":
        case "i":
        case "o":
        case "u":
            document.getElementById("result").innerText="Vowel";
            break;
        case "b":
        case "c":
        case "d":
        case "f":
        case "g":
        case "h":
        case "j":
        case "k":
        case "l":
        case "m":
        case "n":
        case "p":
        case "q":
        case "r":
        case "s":
        case "t":
        case "v":
        case "w":
        case "x":
        case "y":
        case "z":
            document.getElementById("result").innerText="Consonant";
            break;                                   
        case "A":
        case "E":
        case "I":
        case "O":
        case "U":
            document.getElementById("result").innerText="Vowel";
            break;
        case "B":
        case "C":
        case "D":
        case "F":
        case "G":
        case "H":
        case "J":
        case "K":
        case "L":
        case "M":
        case "N":
        case "P":
        case "Q":
        case "R":
        case "S":
        case "T":
        case "V":
        case "W":
        case "X":
        case "Y":
        case "Z":
            document.getElementById("result").innerText="Consonant";
            break;                                                

    }
}


// life stages

function age()
{
    let a=parseInt(document.getElementById("age").value);


    switch(true)
    {
        case (a>=0 && a<=12):
            document.getElementById("life").innerText="Child";
            break;

        case (a>=13 && a<=19):
            document.getElementById("life").innerText="Teen";
            break;
           
        case (a>=20 && a<=59):
            document.getElementById("life").innerText="Adult";
            break;
            
        case (a>=60):
            document.getElementById("life").innerText="Senior";
            break;
        
         default:
            document.getElementById("life").innerText="Enter right age";   
    }
}

// simple calculator


function calculate()

{

    let fv=parseInt(document.getElementById("fv").value);

    let choise=document.getElementById("choise").value;

    let sv=parseInt(document.getElementById("sv").value);

    // let ans;

    switch(choise)
    {
        case "+":
            ans=fv+sv;
            document.getElementById("final").value=ans;
        break;

        case "-":
            if(fv>sv)
                {
            console.log(fv-sv);
                    ans=fv-sv;
                    document.getElementById("final").value=ans;
                }
            else 
                {
                    ans=sv-fv;
                    document.getElementById("final").value=ans;
                }    
        break;
        
        case "*":
            ans=fv*sv;
            document.getElementById("final").value=ans;
            break;

        case "/":
            if(fv!=0 || sv!=0)        
                {
                    ans=fv/sv;
                    document.getElementById("final").value=ans;
                }
            else
                {
                    document.getElementById("final").value="Not Divisible by Zero..."
                }    
             break;   
             
         case "%":
            ans=fv%sv;
            document.getElementById("final").value=ans;
            break;
            
            
          default:
            document.getElementById("final").value="Enter valid choise..";  


    }

}


// triangle

function triangle()
{
    let s1=parseInt(document.getElementById("s1").value);

    let s2=parseInt(document.getElementById("s2").value);

    let s3=parseInt(document.getElementById("s3").value);

    switch(true)
    {
        case (s1===s2 && s1===s3 && s2===s3):
            document.getElementById("type").value="Equilateral Triangle";
            break;


        case (s1===s2 || s1===s3 || s2===s3):
            document.getElementById("type").value="Isosceles Triangle";
            break;   

        case (s1!==s2 && s1!==s3 && s2!==s3):
            document.getElementById("type").value="Scalene Triangle";
            break;        
    }

}