const array_numbers = [20, 30, 4, 5, 11, 7, 8];
const array_new = array_numbers.map((value)=>{
    return value+2;
});
console.log(array_new);
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
const array_emp_name=array_employee.map((element)=>{
    return element.emp_name
})
console.log(array_emp_name);