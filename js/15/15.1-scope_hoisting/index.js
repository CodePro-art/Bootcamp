// Block 1

function funcA() {
  console.log(a);
  console.log(foo());
  let a = 1;
  function foo() {
    return 2;
  }
}
// funcA();

// This fuction will print undefined istead of 1 because a is only defined after the console log function kicks in
// I transsferd the a declaration from line 6 to line 4 to fix the problem
// However the foo() function  is hoisting and is defined well, so it does prints 2.

// Block 2

let fullName = 'John Doe';
let obj = {
  fullName: 'Colin Ihrig',
  prop: {
    fullName: 'Aurelio De Rosa',
    getFullName: function () {
      return this.fullName;
    }
  }
};
console.log(obj.prop.getFullName());
let test = obj.prop.getFullName;
console.log(test());

// the variable let fullName = 'John Doe'; is not being used because it is a local variable out of the method's scope
// also, the fullName: 'Colin Ihrig', will not be printed because the method that is being called relates to prop and not to obj
// the fullName: 'Aurelio De Rosa' however will be printed by the first function.
// In line 31, test() is a function identical to getFullName but has no fullName field to refer to, thus returning "undefined"
// if however we add () to the function in line 30, it returns a string to test. Then, to print it we need to remove the () from line 31.

// Block 3

function funcB() {
  let a = b = 0;
  a++;
  return a;
}
funcB();
console.log(typeof a);
console.log(typeof b);

// a is local variable
// b is global variable

// Block 4

function funcC() {
  console.log("1");
}
funcC();
  function funcC() {
  console.log("2");
}
funcC();

// In this case, 2 functions with the same name are declared and therefore the compiler chooses the second to override the first

// Block 5

function funcD1() {
  d = 1;
}
funcD1();
console.log(d);

function funcD2() {
  var e = 1;
}
funcD2();
// console.log(e);

//  in function funcD2, var e is global in the scope of D2 but not beyond it
// In funcrion funcD1, because d is bot defined in D1's scope, it jumps outside to search for declaration.
// when not finding, it defines it as global var outside of funcD1

// Block 6

function funcE() {
  console.log("Value of f in local scope: ", f);
}
console.log("Value of f in global scope: ", f);
var f = 1;
funcE();

// Here, the variable f is a global variable that is defined only after the function funcE.
// thus, cannot be used inside that fonction. If we let the declaration be first then the function will be able to reach it.
// to solve this problem, just cut line of the declaration of f above the function declaration.
// 