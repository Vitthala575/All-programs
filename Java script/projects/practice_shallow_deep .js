let object_x={name:"vitthal",
village:"natepute",
education:{
    diploma:"civil",
    degree:"mechanica",
    ms:"computer"
}}
let object_y=JSON.parse(JSON.stringify(object_x))
object_y.name="sachin";
object_y.education.degree="mbbs";
object_y.education.diploma="welder";
let a=object_x.education
let b=object_y.education
console.log(a);
console.log(b);
console.log(object_x.name);
console.log(object_y.name);
console.log(`hi rhis is my new keybord`);