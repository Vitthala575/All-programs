console.log(`==========Assignment-B==============`);
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
const emp_radha=new Employee_name(99,"Radha","HR",74000,"Wipro");
const emp_rishi=new Employee_name(66,"Rishi","Finance",47000,"TCS");
const emp_sonali=new Employee_name(55,"Sonali","Finance",45000,"Infy");
const emp_monika=new Employee_name(88,"Monali","IT",40000,"Wipro");
const emp_viny=new Employee_name(77,"Vinayak","IT",75000,"TCS");
const emp_mahi=new Employee_name(33,"Mahi","HR",85000,"Infy");
Array_employee=[emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_viny,emp_mahi];
console.log(`Que-1 Employees in ascending order on the basis of ID`);
Array_employee.sort((a,b)=>{
    return a.emp_id>b.emp_id?1:-1;
})
Array_employee.forEach((element) => {
    console.log(`ID:${element.emp_id}  Name: ${element.emp_name}  Deparment:${element.emp_dept}`);
});
console.log(`----------------------------------------------------------------------------------------`);
console.log(`Que-2 Sorting employees in ascending order of employee deparment`);
Array_employee.sort((empy1,empy2)=>{
    return empy1.emp_dept>empy2.emp_dept?1:-1;
})
Array_employee.forEach((element)=>{
    console.log(`ID:${element.emp_id}  Deparment:${element.emp_dept}  Company:${element.emp_company}`);
})
console.log(`----------------------------------------------------------------------------------------`);
console.log(`Que-3 sorting employee in descending order of their salary`);
Array_employee.sort((emp1,emp2)=>{
    return emp1.emp_salary>emp2.emp_salary?-1:1;
})
Array_employee.forEach((element)=>{
    console.log(`Name:${element.emp_name}  Salary:${element.emp_salary}  Company:${element.emp_company}`);

})
console.log(`----------------------------------------------------------------------------------------`);
console.log(`Que-4 Sorting employee in ascending order off their company name`);

Array_employee.sort((emp1,emp2)=>{
    return emp1.emp_company>emp2.emp_company?1:-1
})
 
Array_employee.forEach((element)=>{
    console.log(`Company:${element.emp_company}  ID:${element.emp_id}  Name:${element.emp_name}  Salary:${element.emp_salary}  Deparment:${element.emp_dept}`);
})
