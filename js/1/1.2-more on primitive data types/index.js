
// --Delete the wrong answers--

// 1. Which of the following is/are strings?
// c) '4'

console.log('1. Which of the following is/are strings?') 
console.log('a) '+ typeof 4);
console.log('b) '+ typeof 4.0);
console.log('c) '+ typeof '4');

// 2. Which of the following is/are numbers?
// a) 4
// b) 4.0
// d) -4

console.log('2. Which of the following is/are numbers?') 
console.log('a) '+ typeof 4);
console.log('b) '+ typeof 4.0);
console.log('c) '+ typeof '4');
console.log('d) '+ typeof -4);

// 3. Which of the following is/are booleans?
// a) true
// b) false

console.log('3. Which of the following is/are booleans?') 
console.log('a) '+ typeof true);
console.log('b) '+ typeof false);
console.log('c) '+ typeof "true");


// 4. What is the result of 80 + 71.2?
// a) 151.2

console.log('4. What is the result of 80 + 71.2?') 
console.log( 80 + 71.2);

// 5. What is the result of "80" + 71.2?
// c) "8071.2"

console.log('5. What is the result of "80" + 71.2?') 
console.log("80" + 71.2);
console.log(typeof("80" + 71.2));

// 6. Does 100 + 30 produce a number or a string?
// a) number

console.log('6. Does 100 + 30 produce a number or a string?');
console.log(typeof (100 + 30));

// 7. Does "100" + 30 produce a number or a string?
// b)string

console.log('7. Does "100" + 30 produce a number or a string?');
console.log(typeof ("100" + 30));


//------Submit your answers under the question------//

//create three different ways to declare variables
var a ;
let b ;
const PI = 3.141592653589793;

//declare a variable and reassign a value to it
let y = 5;

//create a variable and after that assign a string with its value being: He's got it!
let str1;
str1 ="He's got it!";
console.log(str1);
console.log(typeof str1);


// 1. create a variable and assign a value on how much a restaurant bill is.
let bill = 200;
console.log(bill);
// 2. create a variable and assign a value on how much tax they should pay.
let tax = 0.1;
console.log(tax*100+'%');
// 3. create a variable that will calculate the bill * tax and its output would be: Your total bill is <total bill> $.
let total_bill = Math.round(bill*(tax + 1));
console.log('Your total bill is ' + total_bill+ ' $.');

// Round the number 50.6 to its nearest integer
let k = Math.round(50.6);
console.log(k);

// Create a variable that is undefined
console.log(typeof a)



