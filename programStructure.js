//A function is a piece of program wrapped in a value. Such values can be
//applied in order to run the wrapped program. For example, in a browser en-
//vironment, the variable alert holds a function that shows a little dialog box
//with a message. It is used like this:
//alert("Good morning!");

//Anything
//that produces a value is an expression in JavaScript,

console.log(Math.max(2, 4));
//4 regresa el valor mayor.
console.log(Math.min(2, 4) + 100);
//102

//Browser environments contain other functions besides alert for popping
//up windows.
//This returns a Boolean: true if the user clicks OK and false if the user clicks
//Cancel.
confirm("Shall we, then?");

//The prompt function can be used to ask an “open” question. The first ar-
//gument is the question, the second one is the text that the user starts with. A
//line of text can be typed into the dialog window, and the function will return
//this text as a string.
prompt("Tell me everything you know.", "...");

//The function Number converts a value to a number. We need that con-
//version because the result of prompt is a string value, and we want a number.
//There are similar functions called String and Boolean that convert values to
//those types.

var theNumber = Number(prompt("Pick a number", ""));
alert("Your number is the square root of " +
theNumber * theNumber);

var theNumber = prompt("Pick a number", "");
if (!isNaN(theNumber))
alert("Your number is the square root of " +
theNumber * theNumber);

var theNumber = Number(prompt("Pick a number", ""));
if (!isNaN(theNumber))
alert("Your number is the square root of " +
theNumber * theNumber);
else
alert("Hey. Why didn't you give me a number?");

//chained
if (num < 10)
alert("Small");
else if (num < 100)
alert("Medium");
else
alert("Large");

//while
var number = 0;
while (number <= 12) {//if is true.
 console.log(number);//do this
 number = number + 2;
}
//0
//2..
var result = 1;
var counter = 0;
while (counter < 10) {
 result = result * 2;
 counter = counter + 1;
}
console.log(result);
//1024

//do while
//The do loop is a control structure similar to the while loop. It differs only
//on one point: a do loop always executes its body at least once, and it starts
//testing whether it should stop only after that first execution. To reflect this,
//the test appears after the body of the loop:
do {
 var name = prompt("Who are you?");
} while (!name);
console.log(name);
//all strings except "" convert to true .

//for
for (var number = 0; number <= 12; number = number + 2)
console.log(number);
//0
//2
// ... etcetera
var result = 1;
for (var counter = 0; counter < 10; counter = counter + 1)
result = result * 2;
console.log(result);
//1024
//This program illustrates the break statement. It finds the first number
//that is both greater than or equal to 20 and divisible by 7.
for (var current = 20; ; current++) {
if (current % 7 == 0)
break;
}
console.log(current);
//21
//Using the remainder ( % ) operator is an easy way to test whether a num-
//ber is divisible by another number. If it is, the remainder of their division
//is zero.
//The continue keyword is similar to break , in that it influences the progress
//of a loop. When continue is encountered in a loop body, control jumps out of
//the body and continues with the loop’s next iteration.

