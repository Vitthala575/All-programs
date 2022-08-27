console.log(`=================Assignment=================`);
const array_number=[20,11,40,35,23,11,9,31,60,2,19]
console.log(`Que-1 Adding 10 in each element`);
const array_added=array_number.map((element)=>{
    return element+10
})
console.log(array_added);
console.log(`---------------------------------------------------------`);
console.log(`Que-2 Squrong each element`);
const array_squared=array_number.map((element)=>{
    return element**2
})
console.log(array_squared);
console.log(`----------------------------------------------------------`);
console.log(`Que-3 Add index value in curresponding  elements`);
const array_index_added=array_number.map((element,index)=>{
    return element+index;
})
console.log(array_index_added);