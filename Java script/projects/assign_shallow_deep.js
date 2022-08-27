console.log(`----------Assignment-2 -----------------------------`);
console.log(`Que-1 Original array`);
const array_num=[20,3,4,56,90,400,49];
console.log(array_num);
console.log(`--------------------------------------------------------------------------`);
console.log(`==>Step-1 Shallow clone with update value of clone`);

const array_num_shallow=array_num
index=array_num_shallow.indexOf(90)
const array_update=array_num_shallow.splice(index,0,55,66)
console.log(`Original array:`,array_num);
console.log(`cloned array:`,array_num_shallow);
console.log(`--------------------------------------------------------------------------`);
console.log(`==>Step-2 Deep clone with spread operator update value of original`);

const array_num_clone={...array_num}
array_num.push(10,25)
console.log(`Original array after update:`,array_num);
console.log(`Cloned  array after update:`,array_num_clone);
console.log(`--------------------------------------------------------------------------`);
console.log(`==>Step-3 Concat array using spread operator`);

const array_even=[2,30,14,8]
const merged_array=array_num.concat(...array_even)
console.log(merged_array);
console.log(`--------------------------------------------------------------------------`);
console.log(`Que-2 Employee info object`);
console.log(`--------------------------------------------------------------------------`);
const employee_info={
    emp_id:27,
    emp_name:"John Doe",
    salary:{
        july_month:"40,000INR",
        aug_month:"50,000INR",
        jun_month:"65,000INR"
    },
    address:{
 locality:{
    colony:"OM Vridavn society",
    street:"Kanch pokli, 431202",
 },

 city:"Mumbai",
 state:"Maharashtra",
 country:"India"
    },

    mobile:["+91 8600 3456 88","1800-4567 32","+91-9096 5678 77"]
    }
console.log(`Que-5--Employee details on console`);
console.log(`==>A-Address,Locality,City`);
console.log(employee_info.address);
console.log(`==>B-Mobile number`);

console.log(employee_info.mobile);
console.log(`-------------------------------------------------------------------------------------`);
console.log(`Que-6--  Deep clone using spread(...) operator`);
console.log(`-------------------------------------------------------------------------------------`);
const cloned_employee_info={...employee_info}
console.log(`A==>-- Update cloned object street and mobile property `);
console.log(`          `);
cloned_employee_info.address.locality.street="Jangli maharaj road Shivajinagar,pune"
cloned_employee_info.mobile[0]="7020 4753 07";
console.log(`B==>Cloned and original employee object with updated properties only`);
console.log(`Original:==>`,employee_info.address.locality,employee_info.mobile);
console.log(`Cloned:==>`,cloned_employee_info.address.locality,cloned_employee_info.mobile);
console.log(`                           `);
console.log(`C==>Issue-: Oops! Spread operetor not working on the nested objects. Hence nested objects behaves like shallow copied`);
console.log(`--------------------------------------------------------------------------------`);
console.log(`Que-7-Deep copy using JSON.strigify`);
console.log(`--------------------------------------------------------------------------`);
const JSON_employee_info=JSON.parse(JSON.stringify(employee_info));
JSON_employee_info.salary.july_month="80,000INR";
JSON_employee_info.address.country="United Kingdom";

console.log(`C==>updated value for cloned and original on console`);
console.log(`1.Updated value for original string`);
console.log(`Salary:`,employee_info.salary.july_month,`    Country:`,employee_info.address.country);
console.log(`                                                                                            `);

console.log(`2.Updated value for cloned string`);
console.log(`Salary:`,JSON_employee_info.salary.july_month,`    country:`,JSON_employee_info.address.country);


















