class Animal {
  constructor(name,sound) {
		this.name = name;
    this.sound = sound;
	}
  get name() {
    return this.name;
  }
  get sound() {
    return this.sound;
  }
  print(){
    console.log(this.name);
    console.log(this.sound);
  }
}

let lion = new Animal("Simba","ROAR!");
let duck = new Animal("Dafi","Quack!");
let rat = new Animal("Ratatui","Squeeek!");