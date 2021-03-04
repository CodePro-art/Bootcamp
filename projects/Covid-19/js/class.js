// --------------------------------------------------------------------------------------------------------
// -------------------------------------- classes definition --------------------------------------
// --------------------------------------------------------------------------------------------------------

// Class for countries
class Country {
  constructor(data,today,region,name){
    this.name = name;
    this.region = region;
    this.newCases = today.confirmed;
    this.newDeaths = today.deaths;
    this.confirmed = data.confirmed;
    this.critical = data.critical;
    this.deaths = data.deaths;
    this.recovered = data.recovered;
  }
}

// Class for continents
class Continent {
  constructor(name){
    this.name = name;
    this.countries = [];
    this.newCases = 0;
    this.newDeaths = 0;
    this.confirmed = 0;
    this.totalDeaths = 0;
    this.recovered = 0;
    this.critical = 0;
  }
  add(data,today,region,name){
    let c = new Country(data,today,region,name);
    this.countries.push(c);
    this.newCases += today.confirmed;
    this.newDeaths += today.deaths;
    this.confirmed += data.confirmed;
    this.totalDeaths += data.deaths;
    this.recovered += data.recovered;
    this.critical += data.critical;
    return c;
  }
}

// List of continents
class World {
  constructor(){
    this.name = "World";
    this.names = ["Asia","Oceania","Africa","Americas","Europe"];
    this.continents = [];
    this.newCases = 0;
    this.newDeaths = 0;
    this.confirmed = 0;
    this.totalDeaths = 0;
    this.recovered = 0;
    this.critical = 0;
  }
  add(name){
    let c = new Continent(name);
    this.continents.push(c);
  }
  update(){
    this.continents.forEach((cont) => {
      this.newCases += cont.newCases;
      this.newDeaths += cont.newDeaths;
      this.confirmed += cont.confirmed;
      this.totalDeaths += cont.totalDeaths;
      this.recovered += cont.recovered;
      this.critical += cont.critical;
    });
  }
}
