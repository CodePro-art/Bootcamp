// Create an object with a name property. The object should
// also have a method that prints its name, and another
// method that prints its name after a second with the help of
// setTimeOut. in this exercise, you are not allowed to use
// arrow functions.

const hero = {
  name: "Netanel",
  printName: function(){
    console.log(this.name);
  },
  printNameDelay: function(){
    setTimeout(function(){ console.log(this.name); }.bind(this), 3000);
  }
}

hero.printNameDelay();