console.log(`--------------Assignment---------------`);
console.log(`--------------Objects---------------`);
class bank{
bank_name
location
account_no
ifsc
interest_rate
constructor(bank_name,location,account_no,ifsc,interest_rate){
this.bank_name=bank_name;
this.location=location;
this.account_no=account_no;
this.ifsc=ifsc;
this.interest_rate=interest_rate
}
}
const axis_bank=new bank("Axis bank","Malshiras",014242010,"AXMAl001001","4.5")
const sbi_bank=new bank("SBI bank","Natepute",0224241041,"SBNA0012301","2.5")
const icici_bank=new bank("ICICI bank","Akluj",03275310,"ICIAK0120120","4.32")
const kotak_bank=new bank("Kotak bank","Manjri",030100121,"KOMAN0145025","5.00")
const hdfc_bank=new bank("HDFC bank","Faltan",0401004424,"HDFA1204520","4.6")
const punjab_bank=new bank("Punjab bank","Hadpsar",054241042,"PNBHA102547","3.5")
console.log(axis_bank);
console.log(sbi_bank);
console.log(icici_bank);
console.log(kotak_bank);
console.log(hdfc_bank);
console.log(punjab_bank);
console.log(`---------------------------------------------------------------------`);
console.log(`Que-1 Bank name and location`);
const bk_array = [ axis_bank,sbi_bank,icici_bank,kotak_bank,hdfc_bank,punjab_bank]
console.log(bk_array);
for (const element of bk_array) {
    console.log(` Bank name:${element.bank_name}   Location:${element.location}`);
}
console.log(`---------------------------------------------------------------------`);
console.log(`Que-2 Add all object element in set and log on console`);
const banking=new Set();
banking.add(axis_bank);
banking.add(sbi_bank);
banking.add(icici_bank);
banking.add(kotak_bank);
banking.add(hdfc_bank);
banking.add(punjab_bank);
console.log(banking);
for (const element of banking) {
    const name=element.bank_name;
    const ifs=element.ifsc;
    console.log(`bank name:${name}  IFSC:${ifs}`);
}
console.log(`---------------------------------------------------------------------`);
console.log(`Que-3 Adding element in map and traversing`);
const bank_map=new Map();
bank_map.set(axis_bank.account_no,axis_bank)
bank_map.set(sbi_bank.account_no,sbi_bank)
bank_map.set(icici_bank.account_no,icici_bank)
bank_map.set(kotak_bank.account_no,kotak_bank)
bank_map.set(punjab_bank.account_no,punjab_bank)
console.log(bank_map);
const key_map=bank_map.keys()
for (const key of key_map) {
    const output = bank_map.get(key);
    console.log(output);
}
// 4 From the array(Step A) find the object which has name → Kotak bank 

console.log("============ rom the array(Step A) find the object which has name → Kotak bank =============");
for (const bank of array_bank) {
    if(bank.bank_name=="Kotak bank") {
        console.log(`${bank.bank_name}  ${bank.location}`);
    }
}