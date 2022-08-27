console.log(`-----------Assignment-----------`);
console.log(`Que-count "a" in the given string`);
let string1="I am learning JavaScript";
let string2="My favourit movie is laggan";
function count_char(string){
    console.log(`----------------------------------------------------`);
    let count=0
    let result="";
for (let index = 0; index <=`${string}`.length-1; index++) {
    let char=`${string}`.charAt(index);
    if(char=="a"||char=="A"){
      count++;
      result=count
     
    }
   
}
console.log(`NO. of "a" in" ${string} "are==>`,result);
}
count_char(string1)
count_char(string2)