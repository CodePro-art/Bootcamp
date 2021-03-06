// Define pathes to the API's
let path1 = "https://corona-api.com/countries";
let proxy = `https://api.allorigins.win/raw?url=`;
let path2 = `${proxy}https://restcountries.herokuapp.com/api/v1`;

// define global variables
const arrCont = ["Asia","Oceania","Africa","Americas","Europe"];
const loader = document.querySelector('.wrapper');
const canvasWrapper = document.querySelector('#canvas-wrap');
const buttons = document.querySelectorAll('.btn');

// define eventlisteners:
buttons.forEach((e) => {
  e.addEventListener('click',() => {
    let chart = document.querySelector('#chart');
    let continent = world.list[world.names.indexOf(e.id)];
    if(world.names.indexOf(e.id) === -1)
      displayNew(chart, canvasWrapper, world, toArray(world.list,"confirmed") );
    else
      displayNew(chart, canvasWrapper, continent, toArray(continent.list,"confirmed"));
  })
});


// creating list of continents
const world = new World("world");

// Funtion to initialize the web page
async function initPage(){
  let arr = await filter(world.names,path2);
  await updateWorld(arr,path1);
  loader.setAttribute("style","display: none;");
  barChart(world,toArray(world.list,"confirmed"));
}
