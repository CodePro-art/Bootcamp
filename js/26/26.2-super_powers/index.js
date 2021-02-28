const storm = {
// add code here
  superPower: "flying",
  a: printSuperPower,
}
function printSuperPower() {
console.log("my superpower is " + this.superPower);
}

storm.a();