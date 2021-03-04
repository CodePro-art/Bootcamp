// Define pathes to the API's
let path1 = "https://corona-api.com/countries";
let proxy = `https://api.allorigins.win/raw?url=`;
let path2 = `${proxy}https://restcountries.herokuapp.com/api/v1`;

// define global variables
const arrCont = ["Asia","Oceania","Africa","Americas","Europe"];

// function to find a specific country in covid list
async function getCountry (path, code){
  let country  = await get(path + `/${code}`);
  return country;
}

// function to fetch info from API
async function get(endpoint){
  try{
    const promise = await fetch(endpoint);
    return await promise.json();
  }catch(err){
    console.log(err);
  }
}

// function to devide the list into continents
async function filter (continent,path){
  let array = [];
  for(let i = 0 ; i<continent.length; i++){
    let country = await get(path + `/region/${continent[i]}`);
    array.push(country);
  }
  return array;
}

// creating list of continents
const world = new World();

// Funtion to initialize the web page
async function initPage(){
  let covid = await get(path1);
  // let country = await get(path2);
  let arr = await filter(world.names,path2);
  
  for(let i = 0; i<arr.length; i++){
    // add new continent into world
    world.add(world.names[i]);

    // loop each continent
    for(const e in arr[i]){
      // kosorov does not exist in the covid API's list
      if (arr[i][e].cca2 === "XK")
        continue;
      let country = await getCountry(path1,arr[i][e].cca2);
      world.continents[i].add(country.data.latest_data,country.data.today,world.names[i],country.data.name)
    }
  }
    
  console.log(world);
}
