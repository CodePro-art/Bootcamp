// 1. Create the "jumps" array
const jumps = [5,5,8,7,-1,5,4,2,3,5,8,4];
let avg = [];

// 2. Create the "avgJumper"
function avgJumper(arr, shots){
  let sum,i,j,success;
  let avg = [];
  let length = arr.length;
  if (length % shots){
    console.log("Each candidate must have 3 jump results. That's why you get an empty string");
    return avg;
  }
   for(i = 0; i< length; i+=shots){
    sum = 0;
    success = shots;
    for(j = i; j< i+shots; j++){
      arr[j]<0 ? success-- : sum+=arr[j];
    }
    avg[i/shots] = ( success? sum/success : 0);
   }
   return avg;
}

console.log(avgJumper(jumps,3));

// 3. Best average Jump
// Note: that function also work for the best Jump!

const bestAvgJump = function (arr){
  arr.sort();
  return arr[arr.length-1];
}

avg = avgJumper(jumps,3);
console.log(bestAvgJump(avg));
console.log(bestAvgJump(jumps));


