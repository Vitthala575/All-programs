// function person(first_name,city){
//     this.first_name=first_name;
//     this.city=city;
// }
// const person_anil=new person("anil","pune");
// const person_radha=new person("radha","natepute");
// console.log(`${person_anil.first_name}`);
// console.log(`${person_anil.city}`);
function Person(first_name, city) {
    this.first_name = first_name;
    this.city = city;
  }
  const person_anil = new Person("Anil", "Pune");
  const person_radha = new Person("Radha", "Mumbai");
  const person_sunil = new Person("Sunil", "Pune");
  const person_ash = new Person("Ashwini", "Mumbai");
  const person_neha = new Person("Neha", "Mumbai");
  
  console.log(`${person_anil.first_name}`);
  console.log(`${person_anil.city}`);
  
  // Prototype wala
  Person.prototype.country = "US";
  console.log(`${person_anil.country}`);
  console.log(`${person_neha.country}`);