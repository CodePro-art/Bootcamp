console.log("HI!");
let submit = document.querySelector('.submit');
let text = document.querySelector('.text');
let message = document.querySelector('.message')

function logSubmit () {
  if(text.value.length < 100)
    message.innerHTML += "Please submit at least 100 chracters.";
  else
    message.innerHTML="";
}
submit.addEventListener('click',logSubmit);
