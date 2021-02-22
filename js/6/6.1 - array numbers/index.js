const arr = [1, -5, -6, 7, 22, -15];

// 1. Printing the array with loop

function arrayPrint(arr){
  for(let i=0;i<arr.length;i++)
  console.log(arr[i]);
}

// 2. Arrey length Function

function arrayLength(arr){
  var length = 0;
  while(arr[length]!==undefined){
    length++;
  }
  return length;
}

console.log(arrayLength(arr));

// 3. Arraey Sum Function

function arraySum(arr){
  let sum = 0;
  for(let i=0;i<arr.length;i++){
    sum+=arr[i];
  }
  return sum;
}

console.log(arraySum(arr));

// 4. Arrey Multiplication Function

function arrayMulti(arr){
  let mult=1;
  for(let i=0;i<arr.length;i++){
    mult*=(arr[i]?arr[i]:1);
  }
  return mult;
}

console.log(arrayMulti(arr));
