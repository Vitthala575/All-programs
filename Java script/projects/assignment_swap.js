console.log(`----------------Assignment---------------`);

console.log(`---------------------------------------------`);
console.log(`values without swap==>1:100,200`);
console.log(`values without swap==>2:40,50`);
console.log(`---------------------------------------------`);
console.log(`Swaped using third variable`);
function swap_with_third_var(a,x,y){
    
let c
c=y;
y=x;
x=c;
console.log(`${a}==>${x},${y}`);

}
swap_with_third_var(1,100,200)
swap_with_third_var(2,40,50)

console.log(`---------------------------------------------`);
console.log(`Swaped without third variable`);
function swap_without_third_var(a,x,y){
x=x+y;
y=x-y;
x=x-y;
console.log(`${a}==>${x},${y}`);
}
swap_without_third_var(1,100,200)
swap_without_third_var(2,40,50)