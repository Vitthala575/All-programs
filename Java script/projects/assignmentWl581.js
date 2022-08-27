console.log(`Assignment-1 Using while and do while loop`);
console.log(`-----------------------------------------------------------`);
console.log(`Que-1 Number from 5-15`);
function display(a,b) {
var i=a;
while (i<=b) {
    console.log(i);
    i++;
    
}
}
display(5,15)
console.log(`-----------------------------------------------------------`);
console.log(`Que-2 Program to write number from 50 to 40`);
console.log(`-----------------------------------------------------------`);
var i=50;
do {
 console.log(i);  
 i--; 
} while (i>=40);
console.log(`-----------------------------------------------------------`);
console.log(`Que-3 First 15 odd number`);
console.log(`-----------------------------------------------------------`);
var i=0;
do {
 if (i%2!=0) {
    console.log(i);
    
 } 
 i++;  
} while (i<=30);
console.log(`-----------------------------------------------------------`);
console.log(`Que-4 First 10 even number`);
console.log(`-----------------------------------------------------------`);
var i=0;        
while (i<20) {
    if (i%2==0) {
        console.log(i);   
    }
   
    i++;
    
}
console.log(`-----------------------------------------------------------`);
console.log(`Que-5 Table of 5`);
console.log(`-----------------------------------------------------------`);
var i=5;
while (i<=50) {
if (i%5==0) {
    console.log(i);

    
}
    i++;
}
console.log(`-----------------------------------------------------------`);
console.log(`Que-6 Table of 10`);
console.log(`-----------------------------------------------------------`);
var i=10;
while (i<=100) {
   if (i%10==0) {
    console.log(i);
   }
   i++;
}
