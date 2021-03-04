// Define pathes to the API's
let path1 = "https://corona-api.com/countries";
let proxy = `https://api.allorigins.win/raw?url=`;
let path2 = `${proxy}https://restcountries.herokuapp.com/api/v1`;

// define global variables
const arrCont = ["Asia","Oceania","Africa","Americas","Europe"];
const loader = document.querySelector('.wrapper');

// creating list of continents
const world = new World();

// Funtion to initialize the web page
async function initPage(){
  let arr = await filter(world.names,path2);
  await updateWorld(arr,path1);
  loader.setAttribute("style","display: none;")
  barChart(world);
}
