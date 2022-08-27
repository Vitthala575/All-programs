console.log(`==========Assignment===========`);
class Employee_name{
    constructor(emp_id,emp_name,emp_dept,emp_salary,emp_company){
        this.emp_id=emp_id;
        this.emp_name=emp_name;
        this.emp_dept=emp_dept;
        this.emp_salary=emp_salary;
        this.emp_company=emp_company;
    }
}
const emp_anil=new Employee_name(22,"Anil","IT",50000,"TCS");
const emp_radha=new Employee_name(33,"Radha","HR",74000,"Wipro");
const emp_rishi=new Employee_name(55,"Rishi","Finance",47000,"TCS");
const emp_sonali=new Employee_name(66,"Sonali","Finance",45000,"Infy");
const emp_monika=new Employee_name(77,"Mnali","IT",40000,"Wipro");
const emp_viny=new Employee_name(88,"Vinayak","IT",75000,"TCS");
const emp_mahi=new Employee_name(99,"Mahi","HR",85000,"Infy");

console.log(`Adding all emp object inside array`);
Array_employee=[emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_viny,emp_mahi];
for (const element of Array_employee) {
    console.log(element);
}

console.log(`------------------------------------------------------------------------------`);
console.log(`Que-1 Employee in TCS`);
for (const element of Array_employee) {
    if (element.emp_company=="TCS") {
        console.log(`Employee Name:${element.emp_name}   company name:${element.emp_company}`);
    }
    
}
console.log(`------------------------------------------------------------------------------`);
console.log(`Que-2 Finance deparment employee`);
for (const element of Array_employee) {
    if (element.emp_dept=="Finance") {
        console.log(`Deparment:${element.emp_dept}  Employee name:${element.emp_name}`);
    }
  
}
console.log(`------------------------------------------------------------------------------`);
console.log(`Que-3 Employee name starst with "R"`);
for (const element of Array_employee) {
 if (element.emp_name.startsWith("R")){
    console.log(element);
 }
 
}
console.log(`------------------------------------------------------------------------------`);
console.log(`Que-4 employee whose salary is greater than 70000`);
for (const element of Array_employee) {
    if (element.emp_salary>=70000) {
        console.log(`Employee name:${element.emp_name}  Company name:${element.emp_company}  Salary:${element.emp_salary}`);
    }
}
console.log(`------------------------------------------------------------------------------`);
console.log(`Que-5 Employee whose salary greaterr than equal to 50000`);
for (const element of Array_employee) {
    if (element.emp_salary>=50000 && element.emp_dept=="IT") {
        console.log(element);
    }
}
console.log(`------------------------------------------------------------------------------`);
console.log(`Que-6 All employee in the company Infy`);
for (const element of Array_employee) {
    if (element.emp_company=="Infy") {
        console.log(element);
    }
}
