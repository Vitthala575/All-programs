console.log(`------------------Assignment------------------`);
console.log(`Que-1 Class for vehical`);
console.log(`-----------------------------------------------------------------`);
class vehical {
    brand
    SUV
    seats
    safety_rating
    top_model
    price
    constructor(brand, SUV, seats, safety_rating, top_model, price) {
        this.brand = brand;
        this.SUV = SUV;
        this.seats = seats;
        this.safety_rating = safety_rating;
        this.top_model = top_model;
        this.price = price
    }
}
const tata = new vehical("TATA", "Nexon", "5", "5 Star", "XZ+", "16L")
const Mahindra = new vehical("Mahindra", "XUV700", "", "4 Star", "LUX", "25L")
const Hundai = new vehical("Hundai", "Creta", "5", "3 Star", "SX", "18L")
const Ford = new vehical("Ford", "Endevor", "7", "5 Star", "Titanium+", "40L")
const Toyota = new vehical("Toyota", "Fortuner", "7", "4 Star", "Legender", "45L")
console.log(tata);
console.log(Mahindra);
console.log(Hundai);
console.log(Ford);
console.log(Toyota);
console.log(`-----------------------------------------------------------------`);
console.log(`Que-2 Class for college `);
console.log(`-----------------------------------------------------------------`);
class college{
    name
    city
    establishment
    top_department
    constructor(name,city,establishment,top_department){
        this.name=name;
        this.city=city;
        this.establishment=establishment;
        this.top_department=top_department;
    }
}
const KEC=new college("KEC","pandharpur","2009","civil")
const RIT=new college("RIT","Islampur","2000","computer")
const COEP=new college("COEP","Pune","1943","Computer")
const Valchand=new college("Valchand","Sangli","1993","computer")
console.log(KEC);
console.log(RIT);
console.log(COEP);
console.log(Valchand);
console.log(`-----------------------------------------------------------------`);
console.log(`Que-3 Traverse function using for in loop `);
console.log(`-----------------------------------------------------------------`);
function traverse_object(value){
    console.log(`-----------College------------`);
    for (const key in value) {
        if (Object.hasOwnProperty.call(value, key)) {
            const element = value[key];
            console.log(`${key} ==>  ${element}`);
            
        }
    }
}
traverse_object(KEC)
traverse_object(RIT)
traverse_object(COEP)
traverse_object(Valchand)
console.log(`-----------------------------------------------------------------`);
console.log(`Que-Fibonaccy series till 7th occurance `);
console.log(`-----------------------------------------------------------------`);
let count=0;
let x=0;
let y=1;
var fibo_no=x+y ;
console.log(x);
while (count<=6) {
    console.log(fibo_no);
    fibo_no=x+y
    x=y;
    y=fibo_no;
    count++;
}