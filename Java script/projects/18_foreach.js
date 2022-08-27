const array_name=[4,5,6,30,7,8,9,59]
array_name.forEach(function(elem,index,array){
    console.log(elem);
});
array_name.forEach((element,index,array) => {
    console.log(element,index);
});
// Find out numbers greater than 10 from array [20, 30, 4, 5, 11, 7, 8]
array_numbers.forEach(element => {
    if(element>10){
        console.log(element);
    }
});