// Define data source
const endpoint  = "https://swapi.dev/api/people/";

// Create table:
let table = document.createElement('table');
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

const peopleList = fetch(endpoint);

async function getPeople () {
  try{
    const peopleList = await fetch(endpoint);
    const data = await peopleList.json();
    data.results.forEach(async person =>{
        
      const planetList = await fetch(person.homeworld);
      let data = await planetList.json();
      table.innerHTML+=`
      <tr>
          <td>${person.name}</td>
          <td>${person.hair_color}</td>
          <td>${person.height}</td>
          <td>${data.name}</td>
          <td>${data.population}</td>
      </tr>`;
    });
  }catch(err){
    console.log(err);
  }

}

getPeople();

document.body.appendChild(table);

