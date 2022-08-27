console.log("Assignment04");
console.log("Que1- Two function with no Argument and no return value(user defined function)");
console.log("First function");
function Area_of_circle(){
    var pi=3.142;
    var r=4;
    var area=pi*r*r
    console.log("Area of circle=" + area);
}
Area_of_circle()
console.log("Second function");
function DOB(){
    var date=03;
    var month="June";
    var year=1995;
    console.log("My Date Of Birth :"+date+month+year);
}
DOB()
console.log("Que-2 Write a function with argument and log on to screen");
function myname(firstName,lastName){
    console.log(firstName+" "+lastName);
}
myname("Vitthal","Kale")
console.log("Que-3 Function with Two value and swaping");
function swap(value1,value2){
    console.log("Values before swaping:");
    console.log(value1,value2);
    var a=value1;
    var b=value2;
    var c=a
    a=b;
    b=c;
    console.log("Values after swaping:");
    console.log(a,b);
}
swap("Virat","Anushka");
swap(1000,2000)
console.log("Que- Addition of three number");


var addition=add(10.3,600,40);
console.log("addition of three number is",addition);
function add(a,b,c){
    var result=a+b+c;
    return result;
}
console.log("concatination");
function conc(a,b,c) {
    
    console.log(a+"  "+b +"  "+  c );

}
conc("Hello","Good","Morning")
