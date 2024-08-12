

do{
    quote();
}
while(false);



function quote()
{
    


let arr=[
    {
        image:'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/BARUCH%2C_BERNARD_2.jpg/640px-BARUCH%2C_BERNARD_2.jpg',
        quote:"“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
        person:"- Bernard M. Baruch"
    },
    {
        image:'https://trinitytripod.com/wp-content/uploads/2023/03/wolf.jpeg',
        quote:"“You cannot find peace by avoiding life.”",
        person:" – Virginia Woolf"
    },
    {
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWA79NwoJwkKoulLBAxiRadvML6X_flr2Lbw&s',
        quote:"“Don't let your happiness depend on something you may lose.”",
        person:"- C.S. Lewis"
    },
    {
        image:'https://upload.wikimedia.org/wikipedia/commons/6/61/Gandhi_smiling_1942.jpg',
        quote:"“The future depends on what we do in the present.”",
        person:"- Mahatma Gandhi"
    },
    {
        image:'https://upload.wikimedia.org/wikipedia/commons/1/18/Theodor_Seuss_Geisel_%2801037v%29.jpg',
        quote:"“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”",
        person:"- Dr. Seuss"
    },
    {
        image:'https://upload.wikimedia.org/wikipedia/commons/6/61/Gandhi_smiling_1942.jpg',
        quote:"“It's easy to stand in the crowd but it takes courage to stand alone.”",
        person:"- Mahatma Gandhi"
    },
    {
        image:'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiA8cSCfrtXm-lQhemiYHXrm7cqIbG_C9wJLqBmj2hFlIWnQbW9A2k48W-JQAfmdyup8tEB5baJ86aMD8yYHC4Yu6DQaCDB50OxCaX7hC0KZi5lXNWQHICV5_f8iC_iQVEHrIqIyd_qYOdv2jDeBGjpvIKGy1lEC6XHy4xBcRD2inozoeZ-_BXYgR1xibg/s1600/Swami-ji.jpg',
        quote:"“We are what our thoughts have made us; so take care about what you think.”",
        person:"- Swami vivekananda"
    },
    {
        image:'https://upload.wikimedia.org/wikipedia/commons/6/6e/A._P._J._Abdul_Kalam.jpg',
        quote:"“If you want to shine like a sun, first burn like a sun.”",
        person:"- APJ Abdul Kalam"
    },
    {
        image:'https://static.punjabkesari.in/multimedia/08_53_093990530srimad-bhagavad-gita3.jpg',
        quote:"“You have the right to work, but never to the fruit of the work.”",
        person:"- Srimad Bhagavad Gita"
    },
    {
        image:'https://cdn.britannica.com/77/142177-050-4E8010A9/Albert-Einstein-1947.jpg',
        quote:" “Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
        person:"- Albert Einstein"
    },
    {
        image:'https://cdn.britannica.com/56/65056-050-9E0FABF2/Ralph-Waldo-Emerson-1860.jpg',
        quote:" “To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.”",
        person:"- Ralph Waldo Emerson"
    },
    {
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOxLBcB-Jsj3OeSsIDv2tOiJdUD8QQSyn49Q&s',
        quote:" “Success is getting what you want; happiness is wanting what you get.”",
        person:"- W. P. Kinsella"
    },
    {
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFxjZeFsE4dDlemY33OOiYAVVTtZl2DQae9g&s',
        quote:" “Concentrate all your thoughts upon the work in hand. The sun’s rays do not burn until brought to a focus.”",
        person:"- Alexander Graham Bell"
    },
    {
        image:'https://upload.wikimedia.org/wikipedia/commons/d/d6/Mother_Teresa_1.jpg',
        quote:" “The most terrible poverty is loneliness, and the feeling of being unloved.”",
        person:"- Mother Teresa"
    }
]

let a=Math.random()*arr.length;
let b=Math.round(a);


    document.getElementById("ans").innerHTML=`<h1>${arr[b].quote}</h1> <p class="person">${arr[b].person}</p> 
    <img src="${arr[b].image}" style="height: 100px; width: 120px;"></img>`


}