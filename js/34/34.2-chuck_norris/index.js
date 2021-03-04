// Define data source
const endpoint  = "https://api.chucknorris.io/jokes/random";
const endpoint1  = "https://api.chucknorris.io/jokes/categories";
let category;
// const category = `?category=${category}`

let buttons = document.querySelectorAll('.btn');
let select = document.querySelector('select');

// button event listener
buttons.forEach((btn)=>{
  btn.addEventListener('click',async()=>{
    getJoke(category);
  })
});

//  Print text slowly
async function showText(target, message, index, interval) {   
  if (index < message.length) {
    $(target).append(message[index++]);
    setTimeout(function () { showText(target, message, index, interval); }, interval);
  }
}

// 
async function getJoke (category) {
  let path = `?category=${category}`;
  try{
    let anime = document.querySelector(".animated");  
    if(anime)
      anime.remove();
 
    let joke = document.createElement("h3"); 
    joke.classList.add('animated');
    joke.setAttribute("id","msg");
    document.body.appendChild(joke);
    const promis = await fetch(endpoint+path);
    const data = await promis.json();
    $(function () {
      showText("#msg", `${ data.value}`, 0, 30);   
    });

  }catch(err){
    console.log(err);
  }
}


// Retrieve a list of available categories.
async function retrieve () {
  try{
    const promis = await fetch(endpoint1);
    const data = await promis.json();
    for(const item of data){
      select.innerHTML += `<option value="${item}">${item}</option>`
    }
  }catch(err){
    console.log(err);
  }
}

document.getElementById('my-select').addEventListener('change', function() {
  category = this.value;
  console.log('You selected: ', this.value);
});