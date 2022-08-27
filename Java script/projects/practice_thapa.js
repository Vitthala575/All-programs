// var num=10;
// while (num<100){
//     console.log(num);
//     num++
// }
// var x=0;
// do {
//    console.log(x); 
//    x++;
// } while (x<=50);
// for (let index = 0; index < 10; index++) {
//     console.log(index);

// }


// function x(value) {
//   var count = 1;
//   console.log(`table of ${value}`);
//   for (let index = 1; count <= 10; index++) {
//     if (index % `${value}` == 0) {
//       console.log(index);
//       count++;
//     }

//   }
// }
// x(5)
// x(6)
// x(8)
// x(3)
// function display(num) {
//   console.log(`--------Table of ${num}------------`);
//   var count=0;
// for (let index =0; count<=10; index++) {
//   if (index%`${num}`==0) {
//      console.log(index);
//      count++;

//   }

// }
// }
// display(5)
// display(7)



// function expression
// function num(a,b){
// return(a*b)
// }
// var total=num(5,20)
// console.log(total);
// console.log(`for loop to traverse over array`);
// var students=["vitthal","ram","sachin","nitin"];
// for (let i = 0; i < students.length; i++) {
   
//     console.log(students[i]);
// }


// var students=["vitthal","ram","sachin","nitin"];
// for (const elements in students) {
// console.log(elements);
// }
// console.log(`for of loop to used for traverse over array`);
// for (const element of students) {
//     console.log(element);
// }
// var students=["vitthal","ram","sachin","nitin","swapnil","anil","onkar"];
// console.log(students.indexOf("sachin"));
// console.log(students.splice(students.indexOf("sachin"),1,"ganesh"));
// console.log(students);
// const array_x=[2,5,4,5,6,7,1,9,20,45,67]
// let array_y=array_x.map((elem,inddex,arr)=>{
// return `index_no=${inddex} and value is ${elem} belong to${arr}`
// })
// console.log(array_y);
// array_num=[9,16,36,49,64,81,100]
//  let array_root=array_num.map((elem)=>{
//     return Math.sqrt(elem)
// }).filter((elem)=>{
//     return elem>6;
// })

// console.log(array_root);

// const  array=[1,2,3,4,5,6,7,8,9,90,80,70,60]
// const new_array=array.map((element)=>{
//     return element;
// }).filter((element)=>{
//     return element>5;
// }).reduce((accumulator,element)=>{
 
//     return accumulator +=element
// })
// console.log(new_array);

// let tod_date=new Date()
// console.log(tod_date);
// console.log(Date.now());



// console.log(new Date().toLocaleTimeString);
// console.log(new Date().toLocaleDateString);
// console.log(new Date().toLocaleString);
console.log(Math.PI);
console.log(Math.round(10.543));
console.log(Math.pow(2,4));