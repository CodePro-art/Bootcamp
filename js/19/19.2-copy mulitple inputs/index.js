const form = document.querySelector('form');
const input = document.querySelectorAll('.password');
const len = 6;

// button
const btn = document.querySelector('button');
btn.addEventListener('focus',()=> btn.click());
btn.addEventListener('click',console.log("clicked"));

// define event listener for each input box
input.forEach((el,i) => el.addEventListener('keydown',(event)=>{ 
  if (!event.repeat)
    console.log(`Key "${event.key}" pressed  [event: keydown]`);
  else
    console.log(`Key "${event.key}" repeating  [event: keydown]`);
 }));

input.forEach((el,i) => el.addEventListener('keyup',()=>{ 
  i < len-1 ? el.nextElementSibling.focus() : el.parentElement.nextElementSibling.focus();
 }));

 input.forEach((el,i) => el.addEventListener('paste',(event)=>{ 
   let paste = (event.clipboardData || window.clipboardData).getData('text');
   input.forEach(el => console.log(el));
 }));










