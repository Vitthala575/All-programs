console.log(`---------------Assignment-1 Arrow functionn-----------------`);
console.log(`Que-1 With no argument and no return value`);
let display=()=>{
    console.log(`"Good Mornin,Today is Tuesday"`);
}
display()
console.log(`---------------------------------------------------------------`);
console.log(`Que-2 With three argument and no return value Multiply three`);
const multi=(x,y,z)=>{
const a=x*y*z;;
console.log(`Multiplication of three number is:${a}`);
}
multi(5,5,2)
multi(10,4,10)
console.log(`---------------------------------------------------------------`);
console.log(`Que-3 With 5 parameters and return value  to do addition`);

const addition=(a,b,c,d,e)=>{
    return(a+b+c+d+e)
}

let x=addition(100,100,200,349,756)
let y=addition("I am ","learning ","ES6 ","features ","in JS.")
console.log(`Addition is:`,x);
console.log(`Concatination of string is:`,y);