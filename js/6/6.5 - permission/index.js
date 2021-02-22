// 1. Prints all numbers from 0 to number

function pruntOn (number){
  for(let i =0;i < number;i++){
    console.log(i);
  }
}

// 2. Devider

function countX(number, devider){
  for(let i = 0 ; i < number ;i++){
    if(!(i%devider))
      console.log(i);
  }
}

// 3. Even digits

function countEven(number) {
  var count = 0;
  while (number) {
    count += number % 2 === 0;
    number = Math.floor(number / 10);
  }
  return count;
}

// 4.

function countEvenOnRange(number){
  return Math.floor((number-110)/2);
}

// 5. Print reverse

function printReverse(){
  for(let i=100;i > -1;i-=2){
    console.log(i);
  }
}

// 6. Quadratic 

function quadratic (a,b,c){
  // program to solve quadratic equation
  let root1, root2;

  // calculate discriminant
  let discriminant = b * b - 4 * a * c;

  // condition for real and different roots
  if (discriminant > 0) {
    root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    root2 = (-b - Math.sqrt(discriminant)) / (2 * a);

    // result
    console.log(`The roots of quadratic equation are ${root1} and ${root2}`);
  }

  // condition for real and equal roots
  else if (discriminant == 0) {
    root1 = root2 = -b / (2 * a);

    // result
    console.log(`The roots of quadratic equation are ${root1} and ${root2}`);
  }

  // if roots are not real
  else {
    let realPart = (-b / (2 * a)).toFixed(2);
    let imagPart = (Math.sqrt(-discriminant) / (2 * a)).toFixed(2);

    // result
    console.log(`The roots of quadratic equation are ${realPart} + ${imagPart}i and ${realPart} - ${imagPart}i`);
  }
}

// 7. 

function countABC(str){
let len = str.length;
let counts = {};
let ch, count;

for (let index = 0; index < len; ++index) {
  ch = str.charAt(index); 
  count = counts[ch];
  counts[ch] = count ? count + 1 : 1;
  }
for (ch in counts) {
  console.log(ch + " count: " + counts[ch]);
  }
}
// countABC("I want to count the number of occurances of each char in this string");

// 8. 

const toUpper = function(word){
  let len = word.length;
  let charCode;
  let result =[];
  for (let index = 0; index < len; ++index) {
  charCode = word.charCodeAt(index);
  result += ((charCode >= 97 && charCode <= 122)?String.fromCharCode(charCode - 32):word[index]);
  }
  return result;
}
// console.log(toUpper("AbcDf$#sja"));

// 9. 

// String.prototype.isMail = function() {
//   if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-] + @[a-zA-Z0-9-] + (?:\.[a-zA-Z0-9-]+)*$/.test(myForm.emailAddr.value))
//   {
//     return (true);
//   }
//   console.log("You have entered an invalid email address!");
//   return (false);
// }

// console.log("netazuz@gmail.com".isMail());