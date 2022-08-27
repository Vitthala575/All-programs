console.log(`===========Assignment-C===========`);
const array_numbers=[20,11,40,25,37,49,9,90,60,2,19]
console.log(`Que-1 Sum of all numbers`);
const sum=array_numbers.reduce((accumulator,element)=>{
    return accumulator+element;
})
console.log(sum);
console.log(`-----------------------------------------------------------------------`);
console.log(`Que-2 Sum of all even numbers`);
const sum_even=array_numbers.filter((element)=>{
    return element%2==0
}).reduce((accumulator,element)=>{
    return accumulator+element;
})
console.log(sum_even);