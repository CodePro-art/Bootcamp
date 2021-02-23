let checkBox = document.querySelectorAll(".checkbox");
let images = document.querySelectorAll("img");

checkBox.forEach(e => e.addEventListener('click',display));

function display() {
  checkBox[0].checked ? images[0].style.display = "block": images[0].style.display = "none";
  checkBox[1].checked ? images[1].style.display = "block": images[1].style.display = "none";
  checkBox[2].checked ? images[2].style.display = "block": images[2].style.display = "none";
}

