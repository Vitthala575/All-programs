console.log(`Assignment01`);
console.log(`Que-1 Odd Even`);

var odd_even=function(value) {
    console.log("-----------------------------------------------------------");    
if (typeof value==`number`) {
    console.log(`${value}: Is a valid input`);
    if (value % 2 == 0) {
        console.log(`${value} :Is a even number number`);

    } else {
        console.log(`${value}: Is odd number`);
    }

} else {
    console.log(`${value} :Is not a valid input to check`);
}
}
odd_even(60)
odd_even(51)
odd_even(0)
odd_even(5)
odd_even(40)
odd_even(NaN)
odd_even(undefined)
odd_even(null)
console.log("-----------------------------------------------------------");    
console.log(`Que-2 Gender`);
var gender=function(input){
    console.log(`-----------------------------------------------------------`);
    if (input==`Male`||input==`Female`||input==`Other`) {
        console.log(`Value entred is valid`);
        console.log(`Gender is :${input}`);
        
    }else{
        console.log(`${input}:Entred value of gender is invalid`);
    }
}
gender(`Male`)
gender(`Female`)
gender(`Undefined`)
gender(`Other`)
gender(`null`)

console.log(`-----------------------------------------------------------`);
console.log(`Eligibility for voting`);
var voting=function(age){
    console.log(`-----------------------------------------------------------`);
   if (typeof age!=`number`) {
    console.log(`No valid input`);
    
   }else{

if (age>=18 ) {
    console.log(`Your age is:${age}`);
    console.log(` You are eligible to vote`);
    
}else{
    console.log(`${age}:Your age is below 18`);
   console.log(`You are not eligible to vote`);
}
}
}
voting(45)
voting(undefined)
voting(17)
voting(8)
voting(20)
voting(null)
