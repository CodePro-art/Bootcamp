let mycountry = {
  country: "Finland",
  capital: "Helsinki",
  language: "Finnish",
  population: 6,
  neibours: 3,
  describe : function() {
    console.log(`${this.country} has ${this.population} million people, their mother tongue is ${this.language}, they have ${this.neibours} neighbouring countries and a capital called ${this.capital}.`);
  },
  checkIsland : function(){
    mycountry.isIsland = !this.neibours ? true: false;
  }
};

mycountry.describe();
console.log(mycountry);
mycountry.checkIsland();
console.log(mycountry);
