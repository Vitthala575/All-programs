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
const emp_vinay=new Employee_name(88,"Vinayak","IT",75000,"TCS");
const emp_mahi=new Employee_name(99,"Mahi","HR",85000,"Infy");

const array_employees= [ emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_vinay, emp_mahi ];

// Filter out TCS employees into one array
let array_employees_tcs = [];
array_employees.forEach(employee => {
    if (employee.emp_company=="TCS") {
        array_employees_tcs.push(employee);
    }
});

array_employees_tcs.forEach((employee)=> {
    console.log(employee.emp_name, employee.emp_company);
});

console.log("----------------------");

const array_emp_tcs =  array_employees.filter( (employee) => {
    return employee.emp_company=="TCS";
});
array_emp_tcs.forEach((employee)=> {
    console.log(employee.emp_name, employee.emp_company);
});