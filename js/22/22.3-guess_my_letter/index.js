const web = document.querySelector('body');
const alphabet = "abcdefghijklmnopqrstuvwxyz";
const secret = alphabet[Math.floor(Math.random() * alphabet.length)];
const head = document.querySelector('.head');
const icon = document.querySelector('i');
const guess = document.querySelector('.guesses');
const wrapper = document.querySelector('.wrapper');
const text = document.querySelectorAll('p');
console.log(secret);
const arr = [];

web.addEventListener('keyup', (e) => {
  let index = check(e.key.toLowerCase());
  head.style.display = "none";
  text.forEach((item,i) => i===index ? item.style.display = "block" : item.style.display = "none");
});

// check input
function check(char){
 if(alphabet.includes(char)){
  if(char === secret){
    icon.style.display = "none";
    wrapper.innerHTML = `<h2>${char}</h2>`;
    confirm("Congratulations! You win!!!");
    location.reload();
    return 0;
  }
  if(arr.includes(char)){
    text[3].innerHTML = `${char} has already been guessed!`;
    wrapper.innerHTML = `<h2>${char}</h2>`;
    return 3;
  }
  arr.push(char.toLowerCase());
  guess.innerHTML = arr.sort().toString();
  icon.style.display = "none";
  wrapper.innerHTML = `<h2>${char}</h2>`;
  return 2;
 }else
    return 1;
}
