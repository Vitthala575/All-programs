console.log(`==========Assignment-C===========`);
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
array_employee=[emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_viny,emp_mahi]
console.log(`Que-1 find out TCS employees `);
array_employee.forEach((element) => {
    if (element.emp_company=="TCS") {
        console.log(`Employee name:`,element.emp_name +" "+`Company name:`,element.emp_company);
    }
});
console.log(`-----------------------------------------------------------------------`);
console.log(`Que-2 Employee with salary greater than 50000`);
array_employee.forEach((element)=>{
    if (element.emp_salary>=50000) {
        console.log(element);
    }
})
console.log(`-----------------------------------------------------------------------`);
console.log(`Que-3 Sum of all employee salary `);
var sum=0;
array_employee.forEach((element)=>{
 sum=sum+element.emp_salary
    
})
console.log(sum);
console.log(`-----------------------------------------------------------------------`);
console.log(`Que-4 Average salary`);
var add=0;
array_employee.forEach((element)=>{
    add=add+element.emp_salary
    
})
const avg=add/array_employee.length
console.log(avg);
console.log(`-----------------------------------------------------------------------`);
console.log(`Que-5 IT and HR deparment employee whose salary greater than 75000`);
array_employee.forEach((element)=>{
    if ((element.emp_dept=="IT" || element.emp_dept=="HR") && element.emp_salary>=75000) {
        console.log(element);
    }
})