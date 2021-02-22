// Block 1

var b = 1;
function someFunction(number) {
  function otherFunction(input) {
    return b;
  }
  b = 5;
  return otherFunction;
}
var firstResult = someFunction(9);
var result = firstResult(2);

// The result does not depend on the 9 and 2 input values. We can replace them with any value.
// The order of things: var b is defined outside of both functions and therefore availables to both. b=1
// Then, an undeclared b is definedin line 8 andrefers to line 3 outside of the function's scope. b <- 5
// then calling to the inner function with no b declared. Thus, the inner function leaps outside to search for b.
// b-5 is in the outer function's scope. So that what it takes as b.
//  final value is 5.

// Block 2

var a = 1;
function b2() {
  a = 10;
  return ;
  function a() { }
}
b2();
console.log(a);

// a=10 is a bad attempt to assign number to function that is declared in line 27. So, a is still 1 !
// If we comment line 27, this assignment will take place and find the nearest declaration of a which is in line 23
// outside of function b2. Thus, the global var a will now be 10.


// Block 3

let i;
for (i = 0; i < 3; i++) {
  const log = () => {console.log(i);}
  setTimeout(log, 100);
}

// The i is declared outside of the for function, thus while iterating through the loop
// It refers to it as a global variable and changes it before the timeout ends.
// addong let=0 in line 40 will fix the problem


