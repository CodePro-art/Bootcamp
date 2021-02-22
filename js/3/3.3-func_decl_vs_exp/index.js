const worldPopulation = 7900;
const chinaPopulation = 21.54;
const francePopulation = 2.148;
const germanyPopulation = 3.769;
let precentageOfChina = percentageOfWorld1(chinaPopulation);
let precentageOfFrance = percentageOfWorld1(francePopulation);
let precentageOfGermany = percentageOfWorld1(germanyPopulation);

function percentageOfWorld1(population){
  return 100*(population/worldPopulation);
}

console.log(precentageOfChina);
console.log(precentageOfFrance);
console.log(precentageOfGermany);

const percentageOfWorld2 = population => 100*(population/worldPopulation);

console.log(percentageOfWorld2(chinaPopulation));
console.log(percentageOfWorld2(francePopulation));
console.log(percentageOfWorld2(germanyPopulation));