function dogAPI()
{
    fetch(`https://dog.ceo/api/breeds/image/random`)
    .then((res)=>{
        return res.json();
    })
    .then((res)=>{
        console.log(res);
        document.getElementById("img").innerHTML=`
        <img src="${res.message}" style="height:100%;width:100%;">
        `
    })
    .catch((err)=>{
        console.log(err);
    })
}
dogAPI()



// document.getElementById('dog1').addEventListener('click', fetchDog);
// function fetchDog() {
//   fetch('https://dog.ceo/api/breeds/image/random')
//     .then(res => res.json())
//     .then(res => {
//       document.getElementById('image').src = res.message;
//     })
//     .catch(error => console.log(error));
// }