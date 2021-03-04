// Define pathes to the API's
let path1 = "https://corona-api.com/countries";
let path2 = "https://restcountries.herokuapp.com/api/v1";

// define global variables
const arrCont = ["Asia","Oceania","Africa","Americas","Europe"];

// Class for countries
class Country {
  constructor(data,region){
    this.region = region;
    this.name;
    this.newCases;
    this.newDeaths;
    this.confirmed = data.confirmed;
    this.critical = data.critical;
    this.deaths = data.deaths;
    this.recovered = data.recovered;
  }
}

// Class for continents
class Continent {
  constructor(){
    this.countries = [];
    this.totalCases = 0;
    this.newCases = 0;
    this.totalDeaths = 0;
    this.newDeaths = 0;
    this.totalRecovered = 0;
    this.Critical = 0;
  }
  add(data,region){
    let c = new Country(data,region);
    this.countries.push(c);
    return c;
  }
}

// List of continents
class World {
  constructor(){
    this.names = ["Asia","Oceania","Africa","Americas","Europe"];
    this.continents = [];
  }
  add(){
    let c = new Continent();
    this.continents.push(c);
  }
}

// creating list of continents
const world = new World();
world.add(arrCont);


// function to fetch info from API
async function get(endpoint){
  try{
    const promise = await fetch(endpoint);
    return await promise.json();
  }catch(err){
    console.log(err);
  }
}

// Funtion to initialize the web page
async function initPage(){
  let covid = await get(path1);
  let country = await get(path2);
  
  for(let i=0;i<world.names.length;i++){
    var filtered = Object.keys(country).reduce((r, e) => {
                    if (acceptedValues.includes(country[e])) r[e] = country[e]
                      return r;
                    }, {})
    console.log(country[i].region);
  }
  // console.log(country[0].name);
  
  // console.log(covid.data[0].name);

  // country.forEach((e) => {
  //   console.log(e.name);
  // });


}
