const arr = ['avalon','bonita','cell','Netanel','zoom'];

const makeAllCaps = (arr) => {
  return new Promise((resolve,reject) => {
    arr.forEach((item) => (typeof item === "string") ? resolve(arr.map((el)=> el.toUpperCase())) : reject('Rejected!'));
  })
}

const sortWords = (arr) => {
  return new Promise((resolve,reject) => {
    resolve(arr.sort());
  })
}
makeAllCaps(arr)
.then((result)=>{
  return result;
})
.then((result)=>{
  console.log(result);
})
.catch((err)=>{
  console.log(err);})