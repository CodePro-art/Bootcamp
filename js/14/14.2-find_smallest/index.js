function findSmallest(a, b, c){
  if (a < b  && a < c){
    return a;
  } else if (b < a  && b < c) {
    return b;
  } else {
    return c;
  }
}
console.log(findSmallest(52,66, 2));

// 1. findsmaiest is not defined! it us written differently
// 2. The conditions end before checking all the possibilities!
// 3. I changed the conditions to check all the options