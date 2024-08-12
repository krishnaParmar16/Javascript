
do{
    meme()
}
while(true)




function meme()
{
    let arr=[
        {
            meme:'https://i.pinimg.com/originals/90/c6/73/90c6737e75f86ac26f04c88e40ffc47c.jpg',
        },
        {
            meme:'https://i.pinimg.com/736x/21/8c/06/218c069e963176cffb882d692b319bf0.jpg',
        },
        {
            meme:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrbecu0SY2YebeJ4SRTrfYipiH8XD_KOLT4g&s',
        },
        {
            meme:'https://qph.cf2.quoracdn.net/main-qimg-5a444a8d707e3081076a328e7875b353-lq',
        },
        {
            meme:'https://i.pinimg.com/736x/d3/ca/08/d3ca08df1d8c16b3bd0c2cfc39c6a7af.jpg',
        },
        {
            meme:'https://qph.cf2.quoracdn.net/main-qimg-aa545640c8088fb77b175ebbcb4ba25c-lq',
        },
        {
            meme:'https://i.pinimg.com/736x/54/48/de/5448deb03e080bed58d8dbb283268129.jpg',
        },
        {
            meme:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUj8AQ-jFCVx3i5KS7SfJ6e3QFIIYMgHLgjA&s',
        },
        {
            meme:'https://i.ytimg.com/vi/BTv5T5_QjuE/oar2.jpg?sqp=-oaymwEYCJUDENAFSFqQAgHyq4qpAwcIARUAAIhC&rs=AOn4CLB0i0_lo6pr5IqljUM5MN9aLBaB3g',
        },
        {
            meme:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhbHKaZA--lKUcDMsZPkpuKBMsPmoGy8KRlg&s',
        },
        {
            meme:'https://qph.cf2.quoracdn.net/main-qimg-58bd84543a609d19cf5c340db3a0d02b-lq',
        },
        {
            meme:'https://i.pinimg.com/originals/97/6c/32/976c32f8b2eeaded38405328e3c1c3d1.jpg',
        },
        {
            meme:'https://www.ohyaaro.com/wp-content/uploads/2024/05/Funny-Latest-Memes-for-Exam.jpg',
        },
        {
            meme:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbbBXMJvIsVxNKkDOTF-mxRiN65gsy1DltYw&s',
        },
        {
            meme:'https://i.pinimg.com/originals/b4/e7/66/b4e7660fa1386e660d92056a64203271.jpg',
        },
        {
            meme:'https://i.pinimg.com/736x/2a/17/72/2a1772ace3cb2d10e6b581304530bd11.jpg',
        }
    ]


    let a=Math.random()*arr.length;
    let b=Math.round(a);


    document.getElementById("main").innerHTML=

    `<div class="box">
    <img src=" ${arr[b].meme}" class="img">
    </div>
    <div class="button">
    <button onclick="meme()">New Meme</button>
     <a href="https://x.com/intent/post?hashtags=quotes&related=aLamm&text=%22To+be+yourself+in+a+world+that+is+constantly+trying+to+make+you+something+else+is+the+greatest+accomplishment.%22+Ralph+Waldo+Emerson" class="link">Share</a>
    </div>
    `

}