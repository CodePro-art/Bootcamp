function swap(obj){
  let object = {};
  let values = Object.values(obj);
  let keys = Object.keys(obj);
  for(let i = 0; i< keys.length ;i++ ){
    object[values[i]]=keys[i];
  }
  return object;
}

let obj = {
    key1 : "value1",
    key2 : "Value2"
};
console.log(swap(obj));