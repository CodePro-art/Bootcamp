let endpoint = "https://dog.ceo/api/breeds/image/random";
let buttons = document.querySelectorAll('.btn');
let number = document.querySelector('.number');
// button event listener
buttons.forEach((btn)=>{
  btn.addEventListener('click',async()=>{
    getDog(number.value);
  })
});
async function getDog (number) {
 
  try{
    let dog = document.querySelectorAll(".dog");  
    if(dog)
      dog.forEach((e)=>{e.remove()});
      for(let i=0;i<number;i++){
        let image = document.createElement("img"); 
        image.classList.add('dog');
    
        const promis = await fetch(endpoint);
        const data = await promis.json();
        console.log(data);
        image.setAttribute("src",data.message)
        document.body.appendChild(image);
      }
    

  }catch(err){
    console.log(err);
  }
}
