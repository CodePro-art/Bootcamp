function getSum(arr1, arr2){
  let sum = 0;
  for (let i=0; i < arr1.length; i++){
    sum += arr1[i];
  }
  for (let i=0; i < arr2.length; i++){
    sum += arr2[i];
  }
  return sum;
}
console.log(getSum([1,2,3],[5,66,23]));


// 1. line 2: const -> let | I added comma to the calling lineto seperate the two arguments | Added return sum at line 9
// 2. I used the terminal, no debugging needed
// 3. The sum variable was constant, therefore could not be assigned with new values
