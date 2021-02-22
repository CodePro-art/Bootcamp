const array1 = [1, 4, 9, 16];
const string1 = "I think, therefore I exist."
const string2 = "abcdefghijklmnopqrstuvwxyz ABCDEFGHIJKLMNOPQRSTUVWXYZ"

// 1. double the value
function doubleValues(arr){
  return arr.map(element => element * 2);
  // let arr1 = [];
  // arr.forEach(element => arr1.push( element * 2));
  // return arr1;
}

// 2. create new array with only the even values
function onlyEvenValues(arr){
  return arr.filter(element => !(element%2));
}

// 3. create nwe array with only the first and last elements if they are strings
function showFirstAndLast(arr){
  let arr1 = [];
  if (typeof(arr[0])=== "string"){
    arr1.push(arr[0]);
  }
  if (typeof(arr[arr.length-1])=== "string"){
    arr1.push(arr[arr.length-1]);
  }
  return arr1;
}

// 4. Vowel counter
function vowelCount(str){
  let counts = {};
  let ch, count;
  let string = str.toLowerCase();
  let str_len = string.length;
 
  for (let i = 0; i < str_len; ++i) {
    if (/[aeiouy]/.test(string.charAt(i))){
      ch = string.charAt(i); 
      count = counts[ch];
      counts[ch] = count ? count + 1 : 1;
    }
  }
  return counts;
}

// 5
function capitalize(str){
  let string ="";
  for(let i=0;i<str.length;i++){
    char = str.charCodeAt(i);
    if (char >= 97 && char <= 122) 
      string += String.fromCharCode(char - 32);
    else
      string += str[i];
  }
  return string;
  // or simply use: str.toUpperCase();
}

// 6
function shiftLetters(str){
  let string ="";
  for(let i=0;i<str.length;i++){
    char = str.charCodeAt(i);
    if ((char >= 98 && char <= 122) || (char >= 66 && char <= 90)) 
      string += String.fromCharCode(char - 1);
    else if (char == 97 || char == 65)
      string += String.fromCharCode(char + 25);
    else
      string += str[i];
  }
  return string;
}

// 7
function swapCase(str){
  let arr = str.split(" ");
  let arr1 = arr.map((element , index) => {
    if (index%2)
      return element.toLowerCase();
    else
      return element.toUpperCase();
  });
  let string = arr1.join(" ");
  return string;
}

console.log(swapCase(string1));
