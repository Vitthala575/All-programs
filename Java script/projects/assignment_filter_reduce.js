console.log(`=================Assignment-D===============`);
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
const emp_monika=new Employee_name(77,"Monali","IT",40000,"Wipro");
const emp_viny=new Employee_name(88,"Vinayak","IT",75000,"TCS");
const emp_mahi=new Employee_name(99,"Mahi","HR",85000,"Infy");


array_emps=[emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_viny,emp_mahi];

console.log(`Que-1 All employees form wipro`);
const array_wipro=array_emps.filter((element)=>{
    return element.emp_company=="Wipro"
})
array_wipro.forEach((element) => {
    console.log(element);
});
console.log(`----------------------------------------------------------------------`);
console.log(`Que-2 All employee form IT and HR deparment`);
const all_IT_HR=array_emps.filter((element)=>{
    return element.emp_dept=="IT"||element.emp_dept=="HR"
})
all_IT_HR.forEach((element)=>{
    console.log(element);
})
console.log(`----------------------------------------------------------------------`);
console.log(`Que-3 All employee having employee id greater than 50`);
const emp_ID_50=array_emps.filter((element)=>{
    return element.emp_id>50
})
emp_ID_50.forEach((element)=>{
    console.log(element);
})
console.log(`----------------------------------------------------------------------`);
console.log(`Que-4 Employee whose name starts with "A"or"V"or"M"`);
const array_name=array_emps.map((element)=>{
if(element.emp_name.startsWith("A")==true||element.emp_name.startsWith("V")==true||element.emp_name.startsWith("M")==true){
    console.log(element);
}
})
console.log(`----------------------------------------------------------------------`);
console.log(`Que-5 Average salary of all employee`);
const sum_employees_salary = array_emps.reduce( (current_total, employee)=> {
    return current_total+employee.emp_salary;
},0);
console.log(sum_employees_salary/array_emps.length);
console.log(`----------------------------------------------------------------------`);
console.log(`Que-6 Average salary of IT deparment employee`);
const  IT_length=array_emps.filter((element)=>{
    return element.emp_dept=="IT"
})
const emp_IT=array_emps.filter((element)=>{
    return element.emp_dept=="IT"
}).reduce((accu,element)=>{
    return accu+element.emp_salary
},0)
console.log(emp_IT/IT_length.length);

