console.log(`================================Assignment-A=============================`);
const array_roll_number=[113,45,56,11,32,45,109,799,56,45]
console.log(`Que-1 Reversedarray`);
const array_reverse=array_roll_number.reverse()
console.log(array_reverse);
console.log(`----------------------------------------------------------------------------`);
console.log(`Que-2 Sorting without custom logic `);
console.log(array_roll_number.sort());
console.log(` without custom logic sort() method  sorts array element on the basis of digits of element not on number`);
console.log(`----------------------------------------------------------------------------`);
console.log(`Que-3 array  element in acending order `);
array_roll_number.sort(((a,b)=>{
    return a>b?1:-1;
}))
console.log(array_roll_number);
console.log(`----------------------------------------------------------------------------`);
console.log(`Que-4 array  element in decending order by sort() `);
array_roll_number.sort((a,b)=>{
    return a>b?-1:1;
})
console.log(array_roll_number);
console.log(`----------------------------------------------------------------------------`);
console.log(`Que-5 array element in descending order by reverse method `);
 const array_sorted=array_roll_number.sort((a,b)=>{
    return a>b?1:-1;
})
console.log(array_sorted.reverse()); 
console.log(`----------------------------------------------------------------------------`);
console.log(`Que-6 Greatest number in array`);
console.log(array_sorted[0]);
console.log(`----------------------------------------------------------------------------`);
console.log(`Que-7 smallest number in array`);
console.log(array_sorted[array_sorted.length]);
console.log(`----------------------------------------------------------------------------`);
console.log(`Que-8 Remove duplicate from array`);
const num_set=[...new Set(array_roll_number)]
console.log(num_set);