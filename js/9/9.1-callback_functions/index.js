// 1
function isString( str, func){
  if(typeof str === 'string' || str instanceof String)
    func(str);
}

function printString (str){
  console.log(str);
}

// isString("my string",printString);
// isString(105,printString);

// 2
function firstWordUpperCase(str, func){
  let first = str.split(" ");
  let newString = first[0].toUpperCase();
  newString += str.slice(newString.length);
  func(newString);
}

function dashes (str){
  console.log( str.replace(/\s+/g, '-'));
}

firstWordUpperCase("my name is netanel",dashes);

// 3
firstWordUpperCase("my name is netanel",printString);

// 4
function lastWordUpperCase(str, func){
  let last = str.split(" ");
  let newString = str.slice(0,str.length-last[last.length-1].length);
  newString += last[last.length-1].toUpperCase();
  func(newString);
}

lastWordUpperCase("my name is netanel",printString);