console.log(`---------------Assignment-02-------------------`);
console.log(`Given array:`);
const numbers=[20,31,40,25,23,11,29,9,60,2,11];
console.log(numbers);
console.log(`---------------------------------------------------------`);
console.log(`Que-1 Total numbers of element available`);
const long=numbers.length
console.log(`Total number of elements available`,long);
console.log(`---------------------------------------------------------`);
console.log(`Que-2 First and last element on console`);
const first_element=numbers[0];
const last_element=numbers[numbers.length-1];
console.log(`First element`,first_element +" "+`Last element`,last_element);
console.log(`---------------------------------------------------------`);
console.log(`Que-3 Last third element`);
const last_third=numbers[numbers.length-3]
console.log(`Last third number is`,last_third);
console.log(`---------------------------------------------------------`);
console.log(`Que-4 Element from end to start position`);
var result=""
for (let index=numbers.length-1; index >=0; index--) {
   const char=numbers[index]
    
   console.log(char);
}
console.log(`---------------------------------------------------------`);
console.log(`Que-5 All even numbers`);
for (let index = 0; index < numbers.length-1; index++) {
    const char=numbers[index];
    if (char%2==0) {
        console.log(char);
        
    }
    
}
console.log(`---------------------------------------------------------`);
console.log(`Que-6 Odd numbers`);
for (let index = 0; index < numbers.length-1; index++) {
    const element = numbers[index];
    if (element%2!=0) {
        console.log(element);
        
    }
    
}
console.log(`---------------------------------------------------------`);
console.log(`Que-7 All even positioned numbers`);
for (let index = 0; index <numbers.length-1; index++) {
    const element = numbers[index];
    if (index%2==0) {
        console.log(element);
        
    }
    
}
console.log(`---------------------------------------------------------`);
console.log(`Que-8 All odd positioned elements`);
for (let index = 0; index <numbers.length-1; index++) {
    const element = numbers[index];
    if (index%2!=0) {
        console.log(element);
        
    }
    
}
console.log(`---------------------------------------------------------`);
console.log(`Que-9 Sum of all numbers in array`);
var num1=0
var num2=0
for (let index = 0; index <=numbers.length-1; index++) {
    const num = numbers[index];
    num2=num1+num;
    num1=num2
}
console.log(`Sum of all number is:`,num2);
console.log(`---------------------------------------------------------`);
console.log(`Que-10 Prime number in the array`);
for (let index = 0; index < numbers.length; index++) {
    var char = numbers[index];
    var count=0;
    if (char>2) {
        
        for (let n = 2; n <char; n++) {
            if (char%n!=0) {
                
          count++;

            
            }
          let x=char-2
            if (count==x) {
                console.log(char);
            } 
        }
       
        
    }
  
    }
console.log(`---------------------------------------------------------`);
console.log(`Que-11 Number which are multiple of 5`);
for (let index = 0; index < numbers.length-1; index++) {
    const element = numbers[index];
    if (element%5==0) {
        console.log(element);
    }
}
console.log(`---------------------------------------------------------`);
console.log(`Que-12 Is 115 available in the array`);
const is_element=numbers.includes(115)
console.log(is_element);
console.log(`---------------------------------------------------------`);
console.log(`Que-13 Is 23 available in the array`);
const available=numbers.includes(23)
console.log(available)


