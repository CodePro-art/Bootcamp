const tag = "&#128520"
let element = document.createElement("span");
const str = document.querySelector('.input');
const submit = document.querySelector('.submit');


function logSubmit () {
  let number = parseInt(str.value);
  element.innerHTML = tag.repeat(number);
  document.body.appendChild(element);
}

submit.addEventListener('click',logSubmit);