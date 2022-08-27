console.log(`rest  operator`);
function add(a,b,...other){
    console.log(other);
    return(a+b+other[1])
   
}
console.log(add(6,7,8,10,9,3));
console.log(`-------------------------------`);
console.log(`spread operator`);
var name=["vitthal","sachin","prashant","swapnil","kishor","mahesh"]
function display(name1,name2,name3,name4,name5) {
    console.log(name1,name2,name3,name4,name5);
    
}
display(...name)
console.log(`-------------------------------------------`);
console.log(`rest and spread with object`);
var student={
    fname:"vitthal",
    age:27,
    village:["natepute","Malshiras","kanher"]
}
 
const   {age,...rest}=student;
console.log(rest);
console.log(`-----------spread on object-----------`);
var newstudent={
    ...student,
    fname:"sachin"
}
console.log(newstudent);