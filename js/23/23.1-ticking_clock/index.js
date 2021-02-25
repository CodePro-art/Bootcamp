const deg = 6;
const hr = document.querySelector("#hr");
const mn = document.querySelector("#mn");
const sc = document.querySelector("#sc");

function Clock(){

  //Save the times in variables
  let today = new Date();
  let hours = today.getHours();
  let hh = today.getHours()*30;
  let minutes = today.getMinutes();
  let mm = today.getMinutes()*deg;
  let seconds = today.getSeconds();
  let ss = today.getSeconds()*deg;

  // Analog
  hr.style.transform = `rotateZ(${hh+(mm/12)}deg)`;
  mn.style.transform = `rotateZ(${mm}deg)`;
  sc.style.transform = `rotateZ(${ss}deg)`;
  
  // digital
  
  //Put 0 in front of single digit minutes and seconds
  minutes = minutes<10 ? "0" + minutes : minutes;
  seconds = seconds<10 ? "0" + seconds : seconds;

  document.getElementById("digital").innerHTML = (hours + ":" + minutes + ":" + seconds);
}

setInterval('Clock()', 1000);