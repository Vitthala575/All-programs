console.log(`----------Assignment----------`);
console.log(`Bank object`);
const bank_sbi={
    bank_name:"State Bank Of India",
    IFSC_code:"SBN190190",
    interest_rate:"4",
    employees:500
}
const bank_location={
    street:"M.G road",
    city:"Pune",
    pin_code:411041
}
console.log(`step-1 ==>bank_sbi object:`,bank_sbi);
console.log(`step-2 ==>bank_location object:`,bank_location);
console.log(`cloning of step-1 and step-2 using assign()`);
let cloned_bank=Object.assign({},bank_sbi)
let cloned_address=Object.assign({},bank_location)
console.log(`cloned bank:`,cloned_bank);
console.log(`cloned location:`,cloned_address);
console.log(`cloning of step-1 and step-2 using spread operator`);
const cloned_spread_bank={...bank_sbi};
const cloned_spread_location={...bank_location};

console.log(cloned_spread_bank);
console.log(cloned_spread_location);

const rate_of_interest={
    home_lone_interest:"11%",
    personal_lone_intrest:"12%",
    due_interest:"24%"
}
console.log(`step-4 ==>rate of interest:`,rate_of_interest);
console.log(`Merging of all operators in sbi_details`);
const sbi_details=Object.assign({}, bank_sbi,bank_location,rate_of_interest)
console.log(`sbi details:`,sbi_details);

