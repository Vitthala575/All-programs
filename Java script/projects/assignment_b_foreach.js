console.log(`-------------Assignment-B---------------`);
console.log(`Que-1 array element with index`);
const array_number=[1,-7,40,502,-77,91,0,108,89,-601]
array_number.forEach((element,index) => {
    console.log(index+"==> "+element);
});
console.log(`---------------------------------------------------------------`);
console.log(`Que-2 `);
console.log(`A -find positive numbers by arrow function `);
array_number.forEach((element )=> {
    if (element>0) {
       console.log(element);
    }
})
console.log(`B -find positive numbers callback`);
array_number.forEach((element )=> {
    if (element>0) {
       console.log(element);
    }
})
console.log(`---------------------------------------------------------------`);
console.log(`Que-3 -Ve numbers in array`);
array_number.forEach((element )=> {
    if (element<0) {
       console.log(element);
    }
})
console.log(`---------------------------------------------------------------`);
console.log(`Que-4 Even numbers using forEach loop`);
array_number.forEach((element )=> {
    if (element%2==0) {
       console.log(element);
    }
})
console.log(`---------------------------------------------------------------`);
console.log(`Que-5 Sum of all elements in array_number`);
const arr_new=array_number.reduce((accumulator,element)=>{
    return accumulator +=element
})
console.log(arr_new);
console.log(`---------------------------------------------------------------`);
console.log(`Que-6 only even positioned array value`);
array_number.forEach((element,index)=>{
    if (index%2==0) {
        console.log(element);
    }
})
console.log(`---------------------------------------------------------------`);
console.log(`Que-7 odd positioned value if they are positive`);
array_number.forEach((element,index)=>{
    if (index%2!=0 && element>0) {
      console.log(element);  
    }
})