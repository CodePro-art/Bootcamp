// --------------------------------------------------------------------------------------------------------
// -------------------------------------- Functions! -------------------------------------------------
// --------------------------------------------------------------------------------------------------------

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
async function filter(continent,path){
  let array = [];
  for(let i = 0 ; i<continent.length; i++){
    let country = await get(path + `/region/${continent[i]}`);
    array.push(country);
  }
  return array;
}

// function to insert world <- continents <- countries
async function updateWorld(arr,path){
  for(let i = 0; i<arr.length; i++){
    // add new continent into world
    world.add(world.names[i]);

    // loop each continent
    for(const e in arr[i]){
      // kosorov does not exist in the covid API's list
      if (arr[i][e].cca2 === "XK")
        continue;
      let country = await getCountry(path,arr[i][e].cca2);
      world.continents[i].add(country.data.latest_data,country.data.today,world.names[i],country.data.name)
    }
  }
}

// fuction to insert data into array
function toArray (){

}


