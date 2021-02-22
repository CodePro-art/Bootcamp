const array = ["boo", "doooo", "hoo","ro"];
function arrayStringsLength(arr){
  let result=[];
  let i = 0;
  while(i<arr.length){
    result.push(arr[i].length);
    i++;
  }
  return result;
}

console.log(arrayStringsLength(array));

// The for solution fits here better because we still have to use the index value and increment it in each iteration