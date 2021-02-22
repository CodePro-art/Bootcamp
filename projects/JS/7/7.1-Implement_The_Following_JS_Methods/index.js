// Implement the following methods -
// - Filter
// - ForEach
// - Map
// Using only for(), array and objects (without other js methods)

const array = [0, 1, 2, 3, 4, 5, 6, 7, 8];
const condition = (element) => element < 5 ? true : false;

// Filter
Array.prototype.Filter = function(callback){
  let result = [];
  for(element of this)
    callback(element) && result.push(element);
  return result
}

// ForEach
// this = the array itself
// i= index of iteration
// this[i] = the value of the i'th iten of the array
Array.prototype.ForEach = function(callback) { 
		for (let i = 0; i < this.length; i++) 
			callback(this[i], i, this);
}

// // Map
Array.prototype.Map1 = function(callback){
  let newArray=[];
  
  for (element of this)
    newArray.push(callback(element));
  return newArray;
}

// array.ForEach(element => console.log(element))
// console.log(array.Filter(a => a%2));
// console.log(array.Map1(x=>x*2));
