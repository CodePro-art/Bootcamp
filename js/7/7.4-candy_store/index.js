const candyStore = {
  candies: [
    {
      name: "mint gum",
      id: "as12f",
      price: 2,
      amount: 2
    },
    {
      name: "twix",
      id: "5hd7y",
      price: 5,
      amount: 4
    },
  ],
  cashRegister: 200,
}

// 1
function getCandy(candyStore, id){
  let len = candyStore.candies.length;
  for(let i = 0; i < len ; i++)
    if(candyStore.candies[i].id === id)
      return  candyStore.candies[i];
}

console.log(getCandy(candyStore,"as12f"));

// 2
function getPrice(candyStore, id){
  let len = candyStore.candies.length;
  for(let i = 0; i < len ; i++)
    if(candyStore.candies[i].id === id)
      return  candyStore.candies[i].price;
}

console.log(getPrice(candyStore,"5hd7y"));

// 3
function addCandy(candyStore, id, name, price){
  candyStore.candies.push({name: name, id: id, price: price, amount: 1});
}

addCandy(candyStore,"hQrt","Ferrero",10)
console.log(candyStore);

// 4
function buy(candyStore, id){
  let len = candyStore.candies.length;
  for(let i = 0; i < len ; i++){
    if(candyStore.candies[i].id === id && candyStore.candies[i].amount >0){
      candyStore.candies[i].amount--;
      candyStore.cashRegister += candyStore.candies[i].price;
      i = len;
    }else if (candyStore.candies[i].id === id && !candyStore.candies[i].amount)
    {
      console.log("Sorry, out of stock");
      i = len;
    }
  }
  
}

buy(candyStore,'hQrt');
console.log(candyStore);
buy(candyStore,'hQrt');
console.log(candyStore);