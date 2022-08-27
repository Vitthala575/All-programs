var voting_eligibility  = function(age) {
    if(age >= 18){
        console.log(`Congrats you are eligible for voting, Age ${age} `)
    } else {
        console.log(`Sorry not eligible for voting, Age ${age} `)
    }
}
voting_eligibility(23);
voting_eligibility(17);
voting_eligibility(2);
voting_eligibility(11);

function gender_check(gender) { // var gender = Male 
    if(gender === "Male") {
      console.log(`Your are Man, Gender ${gender} `);
    }
    if(gender === "Female") {
        console.log(`Your are Woman, Gender ${gender} `);   
    }
    if(gender === "Others") {
        console.log(`Your are Transgender, Gender ${gender} `);    
    }

    if(gender != "Male" && gender != "Female" && gender !="Others") { // gender = "Male"
        console.log(`Invalid gender ${gender}`);
    }
}
gender_check("Male");
gender_check("animal");
gender_check("Female");
gender_check("Others");
gender_check("bird");
function gender_check(gender) { // var gender = Male 
    // if(gender === "Male") {
    //   console.log(`Your are Man, Gender ${gender} `);
    // }
    // if(gender === "Female") {
    //     console.log(`Your are Woman, Gender ${gender} `);   
    // }
    // if(gender === "Others") {
    //     console.log(`Your are Transgender, Gender ${gender} `);    
    // }

    // if(gender != "Male" && gender != "Female" && gender !="Others") { // gender = "Male"
    //     console.log(`Invalid gender ${gender}`);
    // }
if(gender == "Male") { // Others
        console.log(`Your are Man, Gender ${gender} `); 
    } else {
        if(gender === "Female") { // Others
            console.log(`Your are Woman, Gender ${gender} `); 
        } else {
            if(gender === "Others") {
                console.log(`Your are Transgender, Gender ${gender} `); 
            } else {
                console.log(`Invalid gender ${gender}`);
            }
        }
    } 

}
gender_check("Male");
gender_check("animal");
gender_check("Female");
gender_check("Others");
gender_check("bird");




var check_leap_year= function(leap_year) { // null
    if(leap_year === null || leap_year === undefined || isNaN(leap_year) ) {
         console.log(`1. Invalid input ${leap_year}`);
    } else {
         if(leap_year% 4 == 0 && leap_year % 100 !=0 || leap_year%400 ==0 ) {
             console.log(`yes Leap year.. ${ leap_year} `);
         } else{
             console.log(`Not a Leap year.. ${ leap_year} `);
         }
    }
 
  }
 
 // check_leap_year(NaN);
 // check_leap_year(null);
 // check_leap_year(undefined);
 check_leap_year("Twenty Twenty");
 // check_leap_year(1999);
 // check_leap_year(2000);
 // check_leap_year(1600);
 // check_leap_year(1945);


