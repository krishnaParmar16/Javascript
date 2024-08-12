function method(car)
{

        for(let key in car)
        {
            console.log(`${key} : ${car[key]}`);
        }
}

let car={
    brand: "Toyota",
    model: "Corolla", 
    year: 2022
}
method(car)