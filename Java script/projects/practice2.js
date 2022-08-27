// function display(a,b,c){
// return(a+b)
// }
//  var x=display(5,6,7)
// console.log(x);
// console.log(`Factorial of  number `);
// function display(num){
//     var y=1;
//     for (let index = 1; index <=num; index++) {

//         var y=y*index;
//     }
//     return(y)
// }
// console.log(display(4));
// class person{
//   name;
//   lname;
//   village;
//   city;
//   constructor(name,lname,village,city){
//     this.name=name,
//     this.lname=lname,
//     this.village=village,
//     this.city=city
//   }
//   detail(){
//     console.log(`${this.name} ${this.lname} ${this.village} ${this.city}`);
//   }
// }
// const vitthal=new person("vithal","kale","kanher","natepute")
// const sachin=new person("sachin","banasode","salgar","manglvedha")
// const swapnil=new person("swapniil","linge","khandali","akluj")
// vitthal.detail()
// swapnil.detail()
// const  my_date=new Date()
// console.log(my_date);
// console.log(my_date.getDay());
// console.log(my_date.getFullYear());
// console.log(my_date.getTime());
// console.log(my_date.setMinutes(39));
// console.log(my_date.getMonth());
// 
// const  arr=["mango","chhiku","strawbery","apple","banana","custeredapple"]
// console.log(arr.includes("chhiku"));
// console.log(arr[2]);
// console.log(arr.indexOf("apple"));
// console.log("map object");
// class animal{
//     name;
//     color;
//     height;
//     legs
//     constructor(name,color,height,legs){
//         this.name=name;
//         this.color=color;
//         this.height=height;
//         this.legs=legs
//     }
// }
// const human=new animal("human","black","6ft",2)
// const dog=new animal("dog","white","2.5ft",4)
// const cat=new animal("cat","gray","1ft",4)
// const horse=new animal("horse","black","6ft",4)
// const tiger=new animal("tiger","yellow","5ft",4)
// console.log(animal);
// const set_animal=new Set();
// set_animal.add(human)
// set_animal.add(dog)
// set_animal.add(cat)
// set_animal.add(horse)
// set_animal.add(tiger)
// console.log(...set_animal);

// const map_animal=new Map()
// map_animal.set(11,human)
// map_animal.set(22,dog)
// map_animal.set(23,cat)
// map_animal.set(22,horse)
// map_animal.set(25,tiger)
// const key_map=map_animal.keys()
// for (const key of key_map) {
//     const obj=map_animal.get(key)
//     console.log(obj);
// }
// console.log(`immidiate invoke function`);
// (function x(){
//     console.log(353535);
// })()
// console.log(`arraow function with return type and argument`);
// const sum=(num1,num2)=>{
//     return num1+num2;
// }
// let res=sum(30,40)
// console.log(res);
// console.log(`arrow function as a function for the control of filter`);
// my_array=[23,45,66,34,23,45,24]
//  let  new_array=my_array.filter(value=> value%2==0 )
//  console.log(new_array);
// console.log(`rest operater in js is looks like spread operator`);
// let sum=(a,b,c,...other)=>{
// console.log(a+b+c);
// console.log(...other);
// }
// sum(1,2,3,4,3,4,3,5,6,3)
// console.log(`function with default parameter`);
// let def=(x,y=2)=>{
//     return x/y ;
// }

// let res=def(99,3)
// let res2=def(60)
// console.log(res);
// console.log(res2);
