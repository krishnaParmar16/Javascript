class Laptop{
    constructor(brand,model,price)
    {
        this.brand=brand,
        this.model=model,
        this.price=price
    }
    getshowDetail()
    {
        console.log(`My Laptop brand is ${this.brand} and price is ${this.price}`);
    }
}

let myLaptop= new Laptop("Dell","XPS 15",1500); 

myLaptop.getshowDetail();

// console.log(myLaptop);
