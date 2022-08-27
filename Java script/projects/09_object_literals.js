// const person={
//     name:`vitthal`,
//     last_name:`kale`,
//     mobile:`7020475307`,
//     adhar:`2312454657679`,
    


// }
// console.log(person.name);
// console.log(person.mobile);
// console.log(person["adhar"]);
// person.pan_card="sdhc234235";
// console.log(person);//adding new property
// person.name="mauli";//update

// delete person.adhar
// let age = 31;
// const person = {
//     first_name: 'Sachin',
//     last_name: 'Agalave',
//     mobile: "4567 890 9999",
//     adhar: "123 34 56 789 09",
    
//         details: function() {
//             return(`Person Details ${this.first_name} ${this.last_name} ${this.adhar} ${this.mobile}`);
//         }
    
// }
// console.log(person.first_name); // Access the property
// console.log(person["adhar"]);

// person.pan_card = "CDBPK45678"; // Adding new property
// console.log(person);

// person.first_name = "Master Blaster"; // Update
// console.log(typeof person);

// const person = {
//     first_name: 'Sachin',
//     last_name: 'Agalave',
//     mobile: "4567 890 9999",
//     adhar: "123 34 56 789 09",
    
//     details: function() {
//         return `Person Details ${this.first_name} ${this.last_name} ${this.adhar} ${this.mobile}`;
//     }
// }
// console.log(person.first_name); // Access the property
// console.log(person["adhar"]);

// person.pan_card = "CDBPK45678"; // Adding new property
// console.log(person);

// person.first_name = "Master Blaster"; // Update 
// console.log(person);

// delete person.adhar; // delete property
// console.log(person);

// console.log(person.is_married);

// let details = person.details();
// console.log(details);
// // person.address.pin_code = 431203;
// console.log(person.address);
console.log(`-----------------------`);
const student={
    name:"vitthal",
    std:"BE",
    clg:"kEC",
    city:"Pandharpur"
}
const student_keys = Object.keys(student);
 console.log(student_keys);

 const student_values = Object.values(student);
 console.log(student_values);

const student_entries = Object.entries(student);
console.log(student_entries);
console.log(`-----------------------`);
for (const key in student) {
    if (Object.hasOwnProperty.call(student, key)) {
        const element = student[key];
        console.log(`${key}  ${element}`);
    }
}

const is_first_name_available = "first_name" in student;
console.log(`Is Available ${is_first_name_available} `);
var result=name instanceof student;
console.log(result);
