console.log(`----------------Assignment------------------`);
console.log(`Original string:`);
const fruit_seasonal = ["Banana", "Orange", "Apple", "Mango", "Water Melon"]
console.log(fruit_seasonal);
console.log(`--------------------------------------------------------------------`);
console.log(`Operation-1:first and last element on console`);

var result
for (let index = 0; index < fruit_seasonal.length; index++) {
  const element = fruit_seasonal[index];
  if (index == 0 || index == fruit_seasonal.length - 1) {
    console.log(element);
  }

}

console.log(`--------------------------------------------------------------------`);
console.log(`Que-2 Add element Papaya before Banana`);
const add_papaya = fruit_seasonal.unshift("Papaya")
console.log(`length after addinfg papaya ${add_papaya}`);
console.log(fruit_seasonal);
console.log(`--------------------------------------------------------------------`);
console.log(`Que-3 Remove Mango from array`);
const remove=fruit_seasonal.splice(fruit_seasonal.indexOf("Mango"),1)
console.log(fruit_seasonal);
console.log(`--------------------------------------------------------------------`);
console.log(`Que-4 Add element Pineapple at last`);
const pineapple = fruit_seasonal.push("Pineapple")
console.log(fruit_seasonal);
console.log(`--------------------------------------------------------------------`);
console.log(`Que-5 Insert dragon fruit before watermelon`);
const adding = fruit_seasonal.splice(fruit_seasonal.indexOf("Water Melon"),0, "Dragonfruit");
console.log(fruit_seasonal);
console.log(`--------------------------------------------------------------------`);
console.log(`Que-6 Replace Orange with Kiwi`);
const Replace = fruit_seasonal.fill("Kiwi", 1, 2)
console.log(fruit_seasonal);
console.log(`--------------------------------------------------------------------`);
console.log(`Que-7 Total element availabel in the array`);
console.log(fruit_seasonal);

console.log(`--------------------------------------------------------------------`);
console.log(`Que-8 element starting from index 1-4`);
const trim = fruit_seasonal.slice(1, 5)
console.log(trim);
console.log(`--------------------------------------------------------------------`);
console.log(`Que-9 Last three element`);
const last_three = fruit_seasonal.slice(-3)
console.log(last_three);
console.log(`--------------------------------------------------------------------`);
console.log(`Que-10 Traverse array  using for loop`);
for (let index = 0; index < fruit_seasonal.length - 1; index++) {
  const element = fruit_seasonal[index];
  console.log(element);

}