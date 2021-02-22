// Your task is to create a function that does four basic .
// The function should take three arguments - operation(string/char), value1(number),
// value2(number).
// The function should return result of numbers after applying the chosen operation.

const basicOp = (op,a,b) => {
  if (op.length !== 1)
    return false
  switch(op) {
    case '+':
      return a+b;
    case '-':
      return a-b;
    case '*':
      return a*b;
    case '/':
      return a/b;
    default:
      return false;
  }
}

