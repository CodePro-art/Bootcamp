let text = document.querySelector('.text');
let inc = document.querySelector('.button-increase');
let dec = document.querySelector('.button-decrease');

console.log(text);
let fontsize = parseInt(window.getComputedStyle(text).fontSize);

function increaseFontSize () {
  if(fontsize < 100)
    text.style.fontSize = `${++fontsize}px`;
}

function decreaseFontSize () {
  if(fontsize > 7)
    text.style.fontSize =`${--fontsize}px`;
}

inc.addEventListener('click',increaseFontSize);
dec.addEventListener('click',decreaseFontSize);
