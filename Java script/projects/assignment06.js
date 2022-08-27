// console.log("Assignment for string method");
// var string="  Hey you are doing good, keep it up   ";
// console.log(`1.String:"   Hey you are doing good, keep it up    "`);
// var length1=string.length 
// console.log("2.Length of string:"+length1)
// var string2=string.trim()
// console.log("3.Trimmed string:"+string2);
// var length2=string2.length
// var clearLength=length1-length2;
// console.log("4.Total number of extra spaces:"+clearLength);
// var first=string2.charAt(0);
// var last=string2.charAt(33);
// console.log("5.First character="+first+"   "+"Last character="+last);
// var word=string2.split(" ");
// var wordCount=word.length;
// console.log("6.Count of total words:"+wordCount);
// var index=string2.indexOf("good");
// console.log("7.Index of word good:"+index);
// var substring=string2.substring(22);
// console.log("8.Substring starts with index 22:"+substring);
// var checkEnd=string2.endsWith("up");
// console.log("9.Check for end with up:"+checkEnd);
// var checkStart=string2.startsWith("Hey");
// console.log("10.Check for st
function string_assignment() {
    var given_string = "    Hey you are doing good,  keep it up       ";
    console.log(`1. Given String: ${given_string}`);

   var length_str =  given_string.length;
   console.log(`2. Length : ${length_str}`);

   var trimmed_str = given_string.trim(); // Please use this string going forward
   console.log(`3. Trimmed String : ${trimmed_str}`);

    var extra_spaces = length_str - trimmed_str.length;
    console.log(`4. Extra spaces removed count : ${extra_spaces}`);

    var pos_of_last_char =  trimmed_str.length - 1;
    var last_char =  trimmed_str.charAt(pos_of_last_char);
    var first_char = trimmed_str.charAt(0);
    console.log(`5. First and last character : ${first_char}  ${last_char} `); // ${}
}
string_assignment()