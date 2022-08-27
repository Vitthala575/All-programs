console.log(`========Assignment-B==========`);
const array_numbers=[20,11,40,25,37,49,9,90,60,2,19]
console.log(`Que-1 Numbers which are greater than 50`);
 const x=array_numbers.filter((element)=>{
    return element>50
})
console.log(x);
console.log(`-----------------------------------------------------`);
console.log(`Que-2 All even numbers in array`);
const array_even=array_numbers.filter((element)=>{
    return element%2==0
})
console.log(array_even);
console.log(`-----------------------------------------------------`);
console.log(`Que-3 All the odd numbers in array`);
const array_odd=array_numbers.filter((element)=>{
    return element%2!=0;
})
console.log(array_odd);
console.log(`-----------------------------------------------------`);
console.log(`Que-4 All numbers in array which are multiple of 5` );
const array_multiple_5=array_numbers.filter((element)=>{
    return element%5==0
})
console.log(array_multiple_5);
console.log(`-----------------------------------------------------`);
console.log(`Que-5 Nmbers which are between 20 and 50` );
const array_between=array_numbers.filter((element)=>{
    return element>20&&element<50
})
console.log(array_between);