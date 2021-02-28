// Question 1:
// In your own words what will this point to and why?(Note
// this is the global scope)
console.log(this);

// Answer 1:
// this first example prints: { }
// The reason for this is that console id an object with a method called LOG
// The console object does not contain any keys, only methods!

// ------------------------------------------------------------------------------------------------------------------
// Question 2:
// a. In your own words what will this point to and why.
// b. How can you fix this code.
const myObj = {
name: "Timmy",
greet() {
console.log(`Hello ${this.name}`);
},
}; myObj.greet();

// Answer 2:
// a.  In this case, the greet function will print: Hello undefined, 
//    An arrow function expression is a compact alternative to a traditional function expression, but is limited and can't be used in all situations.
//    Does not have its own bindings to "this" or "super", and should not be used as methods.
//    Does not have arguments, or new.target keywords.
//    Not suitable for call, apply and bind methods, which generally rely on establishing a scope.
//    Can not be used as constructors.
//    Can not use yield, within its body.
//    this = {} hence this.name ="undefined"
// b. To fix this problem I can use the classic form of fuction declaration.


// ------------------------------------------------------------------------------------------------------------------
// Question 3:
// In your own words what will this point to and why?
const myFuncDec = function () {
console.log(this);
};
myFuncDec();

// myFuncDec, when called, prints Object [global]{...} || window
// since myFuncDec is not an arrow function  and it does not relate to an object or class,
// This refers to global object or window

// ------------------------------------------------------------------------------------------------------------------
// Question 4:
// In your own words what will this point to and why?
const myFuncArrow = () => {
  console.log(this);
}; 
myFuncArrow();

// just as in Question 2, in an arrow function "this"={}, so that's what is printed
// global objectcontainer or Window object when running on browser

// ------------------------------------------------------------------------------------------------------------------
// Question 5:
// a. In your own words what will this point to and why.
// b. How can you fix this code.
document.querySelector(".element").addEventListener('click',() => {
  console.log(this);
});

// a. document is not defined! 
// ** the event listener shoud contain 2 fields: trigger & function but contains only a callback function in this example
// b. I added "click" to the event listener.
// ** the web page should contain a tag with that class in order to trigger.
// b. I added a button with class="element" and run on live server
// The output was the window object!

