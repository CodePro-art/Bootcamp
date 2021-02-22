// Create a function that returns the sum of the two lowest positive numbers given an array of
// minimum 4 positive i ntegers. No floats or non-positive integers will be passed.

const array = [10, 343445353, 3453445, 3453545353453];
const array1 = [19, 5, 42, 2, 77];

const sumOfLowestTwo = (arr) =>{
  arr.sort((a,b)=> a-b);
  return arr[0]+arr[1];
};

console.log(sumOfLowestTwo(array1))