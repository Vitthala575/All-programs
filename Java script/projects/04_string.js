var greet='Good morning';
var char=greet.charAt(3)
console.log(char);
var fName="vitthal";
var lName="kale";
var fullname=fName.concat(lName);
console.log(fullname);
var position=greet.indexOf("m");
console.log(position);
var upperCase=greet.toLocaleUpperCase()
console.log(upperCase);
var message = "  Good evening     ";
 console.log("Before trim() " + message.length);

 var trimmedString = message.trim();

 console.log("After trim() " + trimmedString.length);

 var serch=greet.search("mor")
 console.log(serch);
var slice= greet.slice(5,8)
console.log(slice);
 
greet="hello good morning";
var words=greet.split(" ");
console.log(words);