const rows = 25;
const cols = 20;
let sky = 0;
let size = rows*cols;
let grass = cols-6;
let ground = cols-5;
let lava = cols-1;
const screen = document.querySelector('.game-screen');

class Minecraft {
  constructor(width) {
    this.width = width;
    this.selectedTool = [];
  }
  initialize(){
    for(let i=0; i<cols ;i++){
      for(let j=0; j<rows ;j++){
        let box = document.createElement('button');
        if(i<grass)
          box.classList.add('box');
        else if(i>=grass && i<ground)
          box.classList.add('box','grass');
        else if(i>=ground && i<lava)
          box.classList.add('box','ground');
        else
          box.classList.add('box','lava');      
        screen.appendChild(box);
      }
    }
  }
  tools(){}
}

let game = new Minecraft(1);
game.initialize();