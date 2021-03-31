const search = arr => {
  let twice = [];
  
  for(let i=arr.length-1 ; i>=0;i--){
    
    if(arr.indexOf(arr[i]) === i && !twice.includes(arr[i])){
      return arr[i]
    }
    else{
      twice.push(arr[i])
    }
  }
}

let array = [4,2,1,2,3,1,4,5,5]

console.log(search(array));