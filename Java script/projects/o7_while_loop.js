var index=0;
while (index<10) {
    console.log(index);
    index++;
}
console.log(`===================================`);
var counter=0
do {
   console.log(counter); 
   counter++;
} while (counter<10);
console.log(`=================================`);
var str = "JavaScript"; //aeiou   Element

var index = 0;
var count = 0;
while(index<str.length){
    var char = str.charAt(index);
    if(char =="a" || char == "A" || char =="e" || char =="E" ) {
        count++;
    }
    index++;
}
function is_even_positioned(my_string) {
    console.log(`Even Positioned Characters`);
    var my_string = "Hard work always pays back";
    for (let index = 0; index < my_string.length; index++) {
        if (index % 2 == 0) {
            var char = my_string.charAt(index);
            if (char != "") {
                console.log(`${my_string.charAt(index)}`);
            }
        }
    }
}
var my_string = "Hard work always pays back";
is_even_positioned(my_string)