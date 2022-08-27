console.log(`Assignment No.2`);
console.log(`----------------------------------------------------------------------`);
console.log(`Que-1 Count vowels`);

var string="I Love JavaScript";
var count=0

for (let index = 0; index <string.length; index++) {
    var char=string.charAt(index)
    if (char=="A"||char=="a"||char=="E"||char=="e"||char=="I"||char=="i"||char=="o"||char=="O"||char=="u"||char=="U") {
       count++;
     
    
}

}

console.log(`Totol number of vowels ${count}`);
console.log(`----------------------------------------------------------------------`);
console.log(`Que-2 Sum of numbers 1-10`);

var num=0;
var add=0 
do {
   var add=add+=num
    
  num++;
} while (num<=10);
console.log(`sum of number is=`,add); 



// var sum=0;
// for (let index = 0; index <=20; index++) {
   
//    var sum=sum+=index;
   
//    sum;
   
// }
// console.log(`sum of number is=`,sum)

console.log(`----------------------------------------------------------------------`);
console.log(`Que-3 Table of 5 and 7`);

function display(num) {
   console.log(`--------Table of ${num}------------`);
   var count=0;
 for (let index =0; count<=10; index++) {
   if (index%`${num}`==0) {
      console.log(index);
      count++;

   }
   
 }
}
display(5)
display(7)
// console.log(`----------------------------------------------------------------------`);
// console.log(`Que-4 Sum of square number from 1-5`);
// console.log(`-------------------------------------------------------------------`);
// function display() {
//    var count=0;
//    var sum=0;
//    for (let index = 0; count<=5; index++) {
//    sum=sum+=index**2;
//    sum;
//    count++;

     
//    }
//    console.log(`Sum of squares of the number 1-5 is : ${sum}`);  
//    }
//    display()

// console.log(`----------------------------------------------------------------------`);
// console.log(`Que-5 Operation on string`);
// console.log(`-------------------------------------------------------------------`);
// var string1="Hard work always pays back"
// var string2="Soon I will be Angular IT champ"
// function even_positioned_chars(arg) {
//    console.log(`-------Even positioned character in: ${arg}--------`);
//    for (let index = 0; index <=string1.length; index++) {
      
//       if (index%2==0) {
//          var char=`${arg}`.charAt(index)
//          console.log(char);
//       }
      
//    }
// }
// even_positioned_chars(string1) 
// even_positioned_chars(string2) 
// console.log(`----------------------------------------------------------------------`);
// console.log(`Que-5 Operation on string`);
// console.log(`-------------------------------------------------------------------`);
// var string1="Hard work always pays back"
// var string2="Soon I will be Angular IT champ"
// function even_positioned_chars(arg) {
//    console.log(`-------Odd positioned character in: ${arg}--------`);
//    for (let index = 0; index <=string1.length; index++) {
      
//       if (index%2!=0) {
//          var char=`${arg}`.charAt(index)
//          console.log(char);
//       }
      
//    }
// }
// even_positioned_chars(string1) 
// even_positioned_chars(string2) 