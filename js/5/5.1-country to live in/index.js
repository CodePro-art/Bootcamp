
const countryToLiveIn = (language, isIsland, population, country)=>{
  if (typeof(language) == "string" && typeof(isIsland) =="boolean" && typeof(population) =="number" && typeof(country) =="string"){
    if(Number.isInteger(population) && population >= 0){
      if (language.toLowerCase() == "english" && isIsland == false && population < 50000000)
        console.log(`You should live in ${country}.`);
      else
        console.log(`${country} does not meet your criteria.`);
    }
    else 
      console.log("Population must be a non-negative integer!");
  }
  else{
    console.log("One or more of the requirements does not match!")
  }
}

countryToLiveIn("English",false, 800000, "Israel");