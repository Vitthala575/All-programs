const number_set = new Set();
console.log(number_set);
number_set.add(11);
number_set.add(22);
number_set.add(33);
number_set.add(22); // Adding duplicate element
console.log(number_set);
console.log(`Size of set is ${number_set.size}`);
// number_set.clear(); //Clear Set

console.log("======== Delete element from Set=========");
const isDeleted = number_set.delete(22);
console.log(isDeleted);
console.log(number_set);
console.log("======== typeof Set =========");
console.log(typeof number_set);

console.log("======== Traversing using for of loop =========");
for (const element of number_set) {
    console.log(element);
}
console.log("======== Traversing using for of loop =========");
const array_numbers = [11, 55, 5,3, 11, 40, 77, 55, 6]
var my_array = []
var x=[];
for (const element of array_numbers) {
    // my_set.add(element)
    x+=element  
    my_array = [x]

}
console.log(array_numbers);
console.log(my_array);
