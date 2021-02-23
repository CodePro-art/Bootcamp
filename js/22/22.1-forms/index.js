const form = document.querySelector('form');
let info;
form.addEventListener('submit',(e)=>{
  info = `Your information:
  Name: ${form[0].value}.
  age: ${form[1].value}.
  email: ${form[2].value}.`;
  confirm(info) ? send() : dissmiss(e);

});

function send (){
  alert("Congratulations you successfully sent this form!");

}

function dissmiss(e){
  e.preventDefault();
  alert("Canceled.");
}