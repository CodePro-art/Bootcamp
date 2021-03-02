// Planet class
class Planet {
  constructor(x,y){
    this.name = x;
    this.population = y;
  }
}

// Person class
class Person {
  constructor(a,b){
    this.name = a.name;
    this.height = a.height;
    this.hair = a.hair_color;
    this.planet = new Planet(b.name,b.population);
  }
}

// People Class: holds a collection of persons and their info
class List {
  constructor(){
    this.list = [];
  }
  // create a new person and save it in the collection
  add(a,b){
    let p = new Person(a,b);
    this.list.push(p);
  }
}

// Define data source
const endpoint  = "https://swapi.dev/api/people/";
let table = document.createElement('table');
let list = new List();

// Create table:
async function insert(){
  table.classList.add('table');
  table.setAttribute("cellspacing","0");
  table.setAttribute("cellpadding","0");
  table.innerHTML+=`
  <tr>
    <th colspan="5">Starwars</th>
  </tr>
  <tr>
      <td>name</td>
      <td>hair</td>
      <td>height</td>
      <td>planet name</td>
      <td>planet population</td>
  </tr>`;
  getApi();
}

// fetch Planet's list
async function getPlanet(path){
  try{
    const promise = await fetch(path);
    return await promise.json();
  }catch(err){
    console.log(err);
  }
}
// fetch character's list
async function getPeople(){
  try{
    const promise = await fetch(endpoint);
    return await promise.json();
  }catch(err){
    console.log(err);
  }
}

// Async function to fetch list 
async function getApi () {
  try{
    const api = await getPeople();
    for(let i=0; i<api.results.length; i++){
      let data = await getPlanet(api.results[i].homeworld);
      list.add(api.results[i],data);
    }
    console.log(list.list);
  }catch(err){
    console.log(err);
  }
  list.list.forEach((el)=>{
    table.innerHTML+=`
      <tr>
        <td>${el.name}</td>
        <td>${el.hair}</td>
        <td>${el.height}</td>
        <td>${el.planet.name}</td>
        <td>${el.planet.population}</td>
      </tr>`;
  });
  
}

document.body.appendChild(table);

