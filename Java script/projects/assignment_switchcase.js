console.log(`Assignment-Switch case`);
console.log(`-----------------------------------------------------------------`);
function check_month(month) {

    console.log(`Entered value is ${month}`);
    
switch (month) {
    case 1:
       console.log(`January`) 
        break;
    case 2:
       console.log(`February`) 
        break;
    case 3:
       console.log(` March`)
        break;
    case 4:
       console.log(` April`)
        break;
    case 5:
       console.log(`May`) 
        break;
    case 6:
       console.log(`June`) 
        break;
    case 7:
       console.log(`Jully`) 
        break;
    case 8:
       console.log(`August`) 
        break;
    case 9:
      console.log(`September`)  
        break;
    case 10:
       console.log(`October`) 
        break;
    case 11:
       console.log(`November`) 
        break;
    case 12:
       console.log(`December`) 
        break;



    default:
        console.log(`Invalid input`);
        break;
}
}
check_month(5)
check_month(1)
check_month(9)
check_month(15)
check_month(6)
check_month(8)
check_month(12)
check_month(4)
check_month(11)

