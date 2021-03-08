class Car {
  constructor(_brand,_speed){
    this.brand = _brand;
    this.speed = _speed;
  }
  get bran() {
    return this.brand;
  }
  get spee() {
    return this.speed;
  }
  print(){
    console.log(this.brand);
    console.log(this.speed);
  }
  setSpeed(_speed){
    this.speed = _speed;
  }
}

class Company {
  constructor(){
    this.storage = [];
  }
 
  add(_brand,_speed){
    let car = new Car(_brand,_speed);
    this.storage.push(car);
  }
  sort(){
    this.storage.sort((a,b) => a.speed-b.speed);
  }
  printAll(){
    this.storage.forEach((e)=>{
      console.log(`Brand: ${e.brand}, speed: ${e.speed}`);
    });
  }
  printFastest(){
    sort();
    console.log(this.storage[this.storage.length-1]);
  }
}

let mazda = new Company();
mazda.add("MAZDA MX-5",120);
mazda.add("MAZDA CX-3",90);
mazda.add("MAZDA 2",80);
mazda.add("MAZDA3 SEDAN",100);


mazda.printAll();
mazda.printFastest();

