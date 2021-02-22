// const arr = [1, -1, 2, 3, -5, 7, 3,200];
const arr = [1, 2, 3, 4, 5];

// 1 .Max
const max = arr.reduce((x,y) =>  x > y ? x : y);
console.log(`The max value of the array is: ${max}`);

// 2. Sum of even numbers
const sumEven = arr.reduce((x,y) => { return !(y%2) ? x+y: x},0);
console.log(`The sum of the even numbers of the array is: ${sumEven}`);

// 3.Average of the items in the array
const average = arr.reduce((a, b) => (a + b)) / arr.length;
console.log(`The average of the array's elements is: ${average}`);