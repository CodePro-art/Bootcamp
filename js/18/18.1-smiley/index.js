console.log("ok");
const number = document.querySelector('.input').value;
let submit = document.querySelector('.submit');

function logSubmit () {
  if(text.value.length < 100)
    message.innerHTML += "Please submit at least 100 chracters.";
  else
    message.innerHTML="";
}
submit.addEventListener('click',logSubmit);