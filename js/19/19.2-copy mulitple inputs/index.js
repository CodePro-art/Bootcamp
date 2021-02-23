const form = document.querySelector('form');
const input = document.querySelectorAll('.password');
const len = 6;
const pass = "123456";

// button
const btn = document.querySelector('button');
btn.addEventListener('focus',()=> btn.click());
btn.addEventListener('click',validate);

input.forEach((el,i) => el.addEventListener('keyup',()=>{ 
  i < len-1 ? el.nextElementSibling.focus() : btn.focus();
}));

input.forEach((el,i) => el.addEventListener('paste',(event)=>{ 
  let paste = (event.clipboardData || window.clipboardData).getData('text');
  const char = paste.split("");
  input.forEach((e,i) => e.setAttribute("value",`${char[i]}`));
  btn.focus();
})); 

function validate () {
  let string = "";
  input.forEach(el=>string += el.value);
  string === pass ? alert("Correct!") : alert("Wrong! Try again!");
}


// check if the string contains only numbers
// let isnum = /^\d+$/.test(paste);


// define event listener for each input box
// input.forEach((el,i) => el.addEventListener('keydown',(event)=>{ 
//   if (!event.repeat)
//     console.log(`Key "${event.key}" pressed  [event: keydown]`);
//   else
//     console.log(`Key "${event.key}" repeating  [event: keydown]`);
//  }));






