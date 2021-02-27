const rows = 20;
const cols = 25;
let size = rows*cols;
let grass = rows-6;
let ground = rows-5;
let lava = rows-1;
const screen = document.querySelector('.game-screen');
const tool = document.querySelectorAll('.tool');
random = (min,max) => Math.random() * (max - min) + min;

class Minecraft {
  constructor(width,trees,bushes) {
    this.width = width;
    this.trees = trees;
    this.bushes = bushes;
    this.selectedTool =[];
    this.inventoryCounter ={};
  }
  // function to initialize world
  initialize(){
    for(let i=0; i<rows ;i++){
      for(let j=0; j<cols ;j++){
        let box = document.createElement('button');
        if(i<grass-1)
          box.classList.add('box','sky');
        else if(i == grass-1)
          box.classList.add('box','bush');
        else if(i>=grass && i<ground )
          box.classList.add('box','grass');
        else if(i>=ground && i<lava)
          box.classList.add('box','ground');
        else
          box.classList.add('box','lava'); 
        box.setAttribute('row',`${j}`);
        box.setAttribute('col',`${i}`);
        screen.appendChild(box);
      }
    }
  }

  tools(){}
 
  generateRandom(bush,tree){
    const maxBushes = Math.floor(cols/3);
    const maxTrees = Math.floor(cols/5);
    bush = bush > maxBushes ? maxBushes : bush;
    tree = tree > maxTrees ? maxTrees : tree;
    let rand = random(0,cols-1);
  }

  resetMap(){
    screen.remove();
    screen = document.createElement('game-screen');


  }
}

// initialize game
let game = new Minecraft(1);
game.initialize();

// reset
function reset(){
  console.log("works!");  
  document.getElementById('rst-btn').classList.add('rst');
  // game.initialize();
  setTimeout(() => {
  document.getElementById('rst-btn').classList.remove('rst');
  },500)
}


// cursor
tool.forEach((e)=>{
  e.addEventListener('click',()=>{
    console.log(e);
    screen.style.cursor=`url('../img/shovel.png'),auto;`;
  })
});

// tiles event


// inventory block counter

let inventoryCounter = {};

