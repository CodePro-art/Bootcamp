// 1 print the numbers  0 to 10
// for (let i =0;i<10;i++){
//   console.log(i);
// }

// 2 print the numbers from 10 to 0
// for (let i =0;i<10;i++){
//   console.log(10-i);
// }

// 3. Print all array values from last to first
const array = [1,2,3,4,5,-5,6,7,8,9,70,-120]
function printArr (arr){
  for(let i =0;i<arr.length;i++){
    console.log(arr[i]);
  }
}

// printArr(array);

// 4. Print sum af array values
// function printArrSum (arr){
//   let sum=0;
//   for(let i =0;i<arr.length;i++){
//     sum+= arr[i];
//   }
//   console.log(sum);
// }

// 5. Sort ascending order
// function bubbleSort(arr) {
//   for (let i = 0; i < arr.length; i++) 
//       for (let j = 0; j < arr.length - i - 1; j++) 
//           if (arr[j + 1] > arr[j]) 
//            [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
//     return arr;
// }

// printArr(bubbleSort(array));

// 6. sort decending order

// 7. 
// function printArr (arr){
//   return arr1 = arr.map(element =>{ return element*10; });
// }

// console.log (printArr(array));

// 8.
//  function remove (arr){ return arr.filter(x=>x>0);}
 
// 9.


console.log(array.sort((a,b) => b-a)[0]);
// printArr(remove(array).sort((a,b) => a-b));