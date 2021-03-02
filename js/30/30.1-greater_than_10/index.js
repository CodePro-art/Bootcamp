let greater = (num) =>  new Promise((resolve,reject) => num>10 ? resolve(num) : reject(`Rejected.`));

greater(7).then((result)=>{
  console.log(result);
}).catch((err)=>{console.log(err);})