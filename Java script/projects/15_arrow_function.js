console.log("========= Function expression with no args and no return type =========");
let display = function () {
    console.log('Inside display function');
}
display();

console.log("========= 1. arrow function =========");
let display_arrow = () => {
    console.log('Inside arrow display function');
}
display_arrow();

console.log("========= 2. arrow function : Second way of writing =========");
let display_arrow_way2 = () => console.log('Inside arrow display function');
display_arrow_way2();


console.log("========= Function expression with args and no return type =========");
let sum = function(num1, num2) {
    return num1+num2;
}
console.log(`Sum is using FE : ${sum(10,20)}`);

console.log("========= 1. arrow function with args: first way of writing =========");
let sum_arrow = (num1, num2) => {
    return num1+num2;
}
console.log(`Sum is using arrow function : ${sum_arrow(10, 20)}`);
// const array = [100, 300, 500, 600 , 50, 40, 44];
// const array_2 =   array.filter(value => value>50);
// console.log(array_2);