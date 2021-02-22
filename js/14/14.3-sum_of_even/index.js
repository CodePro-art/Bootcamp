function getSumOfEven(arr){
  return (arr[0] + arr[2] + arr[4] + arr[6] + arr[8]);
}

const array =[1,2,3,4,5,6,7,8,9,10];
console.log(getSumOfEven(array));

// the function tries to add value of index 10 when the max index is 9
