fetch('https://imdb-top-100-movies.p.rapidapi.com/',{
    method:"GET",
    headers: {
		'x-rapidapi-key': '43332f2c1bmsh7e04161ef238eb5p1736bdjsnfbbdd6c2ae82',
		'x-rapidapi-host': 'imdb-top-100-movies.p.rapidapi.com'
	}
})
.then((res)=>{
    return res.json()
})
.then((res)=>{
    console.log(res);
document.getElementById("main").innerHTML=view(res);
})
.catch((err)=>{
    console.log(err);
})


function view(arr)
{
        return arr.map((el)=>{
            return `
            
               <div class="box" style="height: 400px;width: 24%;margin-top:20px;">
            <div class="img" style="height: 80%;width: 100%;
            border: 1px solid black;">
                <img src="${el.
                    image}" alt="" srcset="" height="100%" width="100%">
            </div>
            <div class="txt" style="height: 20%;width: 100%;">
                <p style="font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;text-align: center;margin-top:10px">${el.title}</p>
                <p style="font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;text-align: center;margin-top:-10px;">${el.rating}/10 <i class="fa-solid fa-star" style="color: rgb(255, 213, 0);"></i></p>
            </div>

        </div>
            
            `
        }).join("")
}
