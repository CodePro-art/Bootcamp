const input = document.querySelector('input');
const btn = document.querySelector('button');
const message = document.querySelector('.message');
const limit = 18;
btn.addEventListener('click',verify)


function verify () {
  let age = parseInt(input.value);
  message.innerHTML = parseInt(input.value) < limit ? `you’re too young` : `you can drink`;
}