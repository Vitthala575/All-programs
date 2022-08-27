console.log(`----------------------------------------------------------------------------------`);
console.log(`                                Assignment`);
console.log(`----------------------------------------------------------------------------------`);
console.log(`Empty object with name teacher and added properties:`);
const teacher={}
  teacher. first_name="Sachin",
teacher.last_name="Londhe",
teacher.village="Shelve",
   
teacher.college="KEC",
teacher.subject="Computer",
   teacher.degrees={
    Engineering:"CSC",
    MS:"DBMS",
    phd:"Advance computing",
},
    teacher.certificates={
        item1:"1.Hacker Rank Participation",
        item2:"2.Certificate in Adv Computing",
        item3:"3.Certificate in IFE course"
    }
   

  
console.log(teacher.first_name);
console.log(teacher.last_name);
console.log(teacher.village);
console.log(teacher.city);
console.log(teacher.college);
console.log(teacher.subject);
console.log(teacher);
console.log(`----------------------------------------------------------------------------------`);
console.log(`Nested object degrees:`);
console.log(teacher.degrees.Engineering);
console.log(teacher.degrees.MS);
console.log(teacher.degrees.phd);
console.log(teacher.degrees);
console.log(`----------------------------------------------------------------------------------`);
console.log(`Nested object Certificates:`);
console.log(teacher.certificates.item1);
console.log(teacher.certificates.item2);
console.log(teacher.certificates.item3);
console.log(teacher.certificates);
console.log(`----------------------------------------------------------------------------------`);
console.log(`Function to concat`);
function value(){
console.log(`Teacher degrees are total degrees are:`,teacher.degrees.Engineering.concat(teacher.degrees.MS).concat(teacher.degrees.phd));
}
value();
console.log(`----------------------------------------------------------------------------------`);
console.log(`Adding new property`);
teacher.Gate_score="95"
console.log(teacher.Gate_score);
console.log(`after adding new property:`,teacher);
console.log(`----------------------------------------------------------------------------------`);
console.log(`Modifying existing property`);
teacher.college="COEP"
console.log(`College name changed`);
console.log(teacher);
console.log(`----------------------------------------------------------------------------------`);
console.log(`Delete certificate`);
delete teacher.certificates.item2
console.log(`item2 deleted:`,teacher.certificates);
console.log(`----------------------------------------------------------------------------------`);
console.log(`adding new certificate 4th new added`);
teacher.certificates.item4="Certificate in DOM manupulation";
console.log(`certificates`);
console.log(teacher.certificates);





