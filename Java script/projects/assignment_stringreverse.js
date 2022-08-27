console.log(`-----------------Assignment-1--------------`);
var string1 ="Hard work always pays back";
var string2 ="Soon I will be Angular IT champ";

function count_space(string) {
    console.log(` string: ${string}`);
    var split = string.split(" ").length - 1;

    console.log(`Spaces:${split}  `);
}
count_space(string1)
count_space(string2)
console.log(`---------------------------------------------------------------`);
console.log(`Que-2 Reverse string`);
console.log(`---------------------------------------------------------------`);
var result=""
function reverse_string(sentence) {
    console.log(`String:${sentence}`);
    for (let index =sentence.length-1; index >= 0; index--) {
    var char=`${sentence}`.charAt(index);
       result+=char; 
      
    }
    console.log(`Reversed string:`,result);
    
}

reverse_string(string1)
reverse_string(string2)
console.log("============================================");
function display(spaces){
    console.log(`NO. of spaces:`);
    let count=0;
    var space
    for (let index = 0; index <=spaces.length-1; index++) {
        let char=spaces.charAt(index)
       if (char==" ") {
        count++;
        space=count;
       } 
    }
    console.log(space);
}
display(string1);
display(string2);

// let reverse_str = "";
// function reverse_string(string_to_reverse) {
//     for (let index = string_to_reverse.length-1; index >=0; index--) {
//         let char = string_to_reverse.charAt(index);
//         reverse_str = reverse_str.concat(char);
//     }
// }
// reverse_string(my_string);
// console.log(`Reverse String - ${reverse_str}`)
    console.log(`---------------------------------------------------------------`);
    console.log(`Que-2 First 10 prime number`);
    console.log(`---------------------------------------------------------------`);
    var num=2
    var count=1;

    for (let index = 2; count<=10; index++) {  
      
        if (index%num==0) {
            console.log(index)
            count++;
        }
    
        
    }