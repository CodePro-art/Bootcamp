// There is an array with some numbers. All numbers are equal except for one. Try to find it!

const findUnique = (arr) => {
  arr.sort();
  return  arr[0] === arr [1] ? arr[arr.length-1] : arr[0];
};



