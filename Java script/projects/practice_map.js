console.log(`map is used to convert given array into new array`);
let arr=[1,22,33,11,34,45,56]
let arr_new=arr.map((element)=>{
    return element/10
    
}).filter((value=value>=3)=>{
    return value
}).reduce((accumulator,element)=>{
    return accumulator +=element
})
console.log(arr_new);


console.log(`========================================`);
