function Pokemon(name, type, attackList){
  this.name = name;
  this.type = type;
  this.attackList = attackList;
}

Pokemon.prototype.callPokemon = function(){
  console.log(`I choose you, ${this.name}`);
}
Pokemon.prototype.attack = function(number){
  console.log(`${this.name} used ${this.attackList[number]}!`);
}

let entei = new Pokemon('Entei','fire',['Swagger','Sunny Day','Fire Blast','Eruption']);
let mew = new Pokemon('Lugia','psychic flying',['Psychic','Aura Sphere','Transform','Imprison']);
let lugia = new Pokemon('Mew','psychic',['Sky Attack','Future Sight','Whirlwind','Ancient Power']);

entei.callPokemon();
entei.attack(2);
mew.callPokemon();
mew.attack(0);
lugia.callPokemon();
lugia.attack(1);
