
const Paragh = document.createElement('p')
Paragh.textContent = 'How many smileys do you want see?';

const Input = document.createElement('input')
const label = document.createElement('label')
label.style.display = 'block'

let length;

Input.addEventListener('input',(p)=>{
   
    if(isNaN(p.target.value)){
        length = -1 
    }else{
        parseInt(length = p.target.value)
    }
})

const button = document.createElement('button')

button.addEventListener('click',() =>{
    let Images = document.querySelectorAll('img')
     for(let i =0;i<Images.length;i++){
        document.body.removeChild(Images[i])
    }
    if(length === -1){
        label.textContent = 'must be a number'
    }else{
        label.textContent = ''
        for(let i=0;i<length;i++){
            let img = document.createElement('img')
            img.src = 'https://images-na.ssl-images-amazon.com/images/I/715vwvP5ZEL.png'
            document.body.appendChild(img)
         
        }
    }
    
})

button.textContent = 'submit'
document.body.appendChild(Paragh)
document.body.appendChild(Input)
document.body.appendChild(button)
document.body.appendChild(label)