var index= 0;
while (index<=10) {
    if(index==5) {
        break;
    }
    console.log(index); // 0 1 2 3 4 5
    index++;
}
console.log("After loop");
for (let index = 0; index <= 5; index++) {
    console.log("Before continue", index); 
    if(index == 2) {
        continue;
    }
    console.log("After continue", index);
    
}
console.log("After for loop");
 

// // Block scope 
// if(true) {
//     const salary = "400000";
//     console.log(salary); 
//  }
//  console.log(salary);
//  console.log(`------------------------------------------`);
//  var my_name = "Mohit"; // Global variable
// // Block scope 
// if(true) {
//    var salary = "400000"; // block scoped variable
//    console.log(salary); 
//    console.log(my_name); 
// }
// // console.log(salary); 
// console.log(my_name); 


// function display() {
//     var my_city = "Pune";
//     if(true) {
//         const my_PIN = 12345; 
//         let my_state = "MH";
//         var my_country = "India"; 
//     }
//     // console.log(my_state); 
//     // console.log(my_PIN); 
//     // console.log(my_city); 
//     console.log(my_country); 
// }
// console.log(my_country); 

// display();
// console.log(`-------------------------------`);
// let counter = 0;
// let index = 0;
// while( counter<= 15) {
//     index++;
//     if(index%2!=0){
//         console.log(index);
//         counter++;
//     }
// }