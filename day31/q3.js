class Laptop{

    constructor(brand,model,price)
    {
        this.brand=brand,
        this.model=model,
        this.price=price
    }

    getshowDetail()
    {
        console.log(`Brand is: ${this.brand} \nModel is: ${this.model} \nPrice is: ${this.price}`);
    }
}
let myLaptop1=new Laptop("Dell","XPS 15",264090);
let myLaptop2=new Laptop("HP","Envy x360 14",99999);
let myLaptop3=new Laptop("Lenovo","Yoga Slim 7x",150990);
let myLaptop4=new Laptop("ASUS","F15 FX506HC-HN362WS",63990);
let myLaptop5=new Laptop("MSI","11SC-1477IN",48790);
let myLaptop6=new Laptop("Apple","MKGQ3HN/A",222990);
let myLaptop7=new Laptop("LG","Gram Thin 13Z980-U.AAW5U1",113900);
let myLaptop8=new Laptop("Samsung","NP750XGK-KG1IN",70990);
let myLaptop9=new Laptop("Microsoft","QEZ-00065",98990);
let myLaptop10=new Laptop("Razer","RZ09-02386E52-R3U1",313536);

myLaptop1.getshowDetail();
myLaptop2.getshowDetail();
myLaptop3.getshowDetail();
myLaptop4.getshowDetail();
myLaptop5.getshowDetail();
myLaptop6.getshowDetail();
myLaptop7.getshowDetail();
myLaptop8.getshowDetail();
myLaptop9.getshowDetail();
myLaptop10.getshowDetail();