/* var my_number=10;
if (my_number==10 ){
    console.log(`my lucky number`);
    console.log(`my lucky number`);
}
var age = 17;
if (age >= 21) {
    console.log(`Hey ${age} congrats your line is clear now`);
}else {
    console.log(`Sorry not eligible`);
}
console.log(`Operation done`);
// if (age >= 18) {
//     console.log(`Now are eligible for voting`);
// } else {
//     console.log(`Sorry not eligible for voting, please try next time`);
// }

// var male_marriage_check = function(gender, age) {
//     if (gender==="Male" ) {
//         if (age >= 21) {
//             return "Hey boy you are eligible for marriage";
//         }
//         else {
//             return "Sorry not eligible";
//         }
        
//     } else {
//         return "Sorry not eligible";
//     }
// }
// var result = male_marriage_check("Male", 20);
// console.log(result)
// Grade design Function
function grade_design(score) {
    if (score >= 0 && score <= 100) { // true
        console.log(`Valid score`);
        if (score < 35) { // 34 < 35
            console.log(`Unfortunately you are failed`);
        } else {
            console.log(`Congrats you are passed`);
            if(score >=35 && score <60 ){
                console.log(`Your grade is C`);
            } else{
                if (score>=60 && score < 80) {
                    console.log(`Your grade is B`); 
                }
                else {
                    if (score>=80 && score <90) {
                        console.log(`Your grade is A`); 
                    } else {
                        console.log(`Your grade is A+`);  
                    }
                }
            }
        }

    } else {
        console.log(`Please provide valid score`);

    }
}
grade_design(80);
grade_design(-10);
// Grade design Function
function grade_design_new(score) {
    if (score >= 0 && score <= 100) { // true
        console.log(`Valid score`);
        if (score < 35) { // 34 < 35
            console.log(`Unfortunately you are failed`);
        } 
        else {
            console.log(`Congrats you are passed`);
            if(score <60 ){
                console.log(`Your grade is C`);
            } 
            if (score>60 && score < 80) {
                console.log(`Your grade is B`); 
            }
            if (score>=80 && score <90) {
                console.log(`Your grade is A`); 
            } 
            if( score>=90 ){
                console.log(`Your grade is A+`);  
            }
}

    } else {
        console.log(`Please provide valid score`);

    }
}
grade_design_new(89);               */
// grade_design(-10);
// Grade design Function
var score =10;
function grade_design_new(score) {
    if (score >= 0 && score <= 100) { // true
        console.log(`Valid score`);
        if (score < 35) { // 34 < 35
            console.log(`Unfortunately you are failed`);
        } 
        else {
            console.log(`Congrats you are passed`);
            if(score <60 ){
                console.log(`Your grade is C`);
            } 
            if (score>60 && score < 80) {
                console.log(`Your grade is B`); 
            }
            if (score>=80 && score <90) {
                console.log(`Your grade is A`); 
            } 
            if( score>=90 ){
                console.log(`Your grade is A+`);  
            }
}

    } else {
        console.log(`Invalid Input !!!`);

    }
}
//grade_design_new(89);
// grade_design(-10);