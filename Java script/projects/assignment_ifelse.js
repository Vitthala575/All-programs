console.log(`Grade system`);
var grade=function(marks) {
    console.log(`----------------------------------------------------------------------------`);
    if (typeof marks==`number`&&marks>=0 &&marks<=100) {
        if(marks<35){
            console.log(`${marks}:Marks less than 35 you are failed`);
        }
      if (marks>=35) {
        console.log(`Your score is: ${marks} you are passed`);
        if (marks>=35&&marks<60){
            console.log(`With grade is "C"`);
        }
        if (marks>=60&&marks<75) {
           console.log(`With grade is "B"`); 
        }
        if (marks>=75&&marks<90) {
            console.log(`With grade is "A"`);
            
        }
        if (marks>=90&&marks<=100) {
            console.log(`With grade is"A+"`);
            
        }
        
      }  
    }else{
        console.log(`Enterd value is: ${marks}`);
        console.log(`Please enter valid marks`);
    }
    
}
grade(45)
grade(null)
grade(90)
grade(34)
grade(undefined)
grade(0)
grade(67)
grade(NaN)