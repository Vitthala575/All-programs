console.log(`Que-1 Ternary oprator`);
console.log(`-----------------------------------------------------------`);
function greater(a,b) {
 var c= (a>=b?a:b)
 console.log(`greatest number is :`,c);   
}
greater(10,-10);
greater(800,899);
console.log(`-----------------------------------------------------------`);


console.log(`Que-2 Odd even`);
console.log(`-----------------------------------------------------------`);


function display(value){
    var result=value%2==0?true:false
    console.log(`${value} :Is an even number=>`,result);
    return result;
}
 display(29)
 display(44)
 display(0)
 display(101)