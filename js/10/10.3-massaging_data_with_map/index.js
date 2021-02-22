const data = [
{
name: "John",
birthday: "1-1-1995",
favoriteFoods: {
meats: ["hamburgers", "sausages"],
fish: ["salmon", "pike"],
},
},
{
name: "Mark",
birthday: "10-5-1980",
favoriteFoods: {
meats: ["hamburgers", "steak", "lamb"],
fish: ["tuna", "salmon", "barracuda"],
},
},
{
name: "Mary",
birthday: "1-10-1977",
favoriteFoods: {
meats: ["ham", "chicken"],
fish: ["pike"],
},
},
{
name: "Thomas",
birthday: "1-10-1990",
favoriteFoods: {
meats: ["bird", "rooster"],
fish: ["salmon"],
},
},
{
name: "Mary",
birthday: "1-10-1977",
favoriteFoods: {
meats: ["hamburgers", "lamb"],
fish: ["anchovies", "tuna"],
},
},
];

// 1. return all names from array

const returnNames = (data) => {
  return data.map(element => {
    return {
      name: element.name
    }
  });
}

// 2. return all objects above 1990
const returnObj = (data) => {
  let arr1 =[];
  data.forEach(element => {
    if (element.birthday.split("-")[2] >= 1990)
     arr1.push(element);
  });
  return arr1;
}

// 3. function to return all different foods from all objects
const returnFood = (data) => {
  let counts = {};
  let count;
  data.forEach(element => {
    element.favoriteFoods.meats.forEach(food =>{
      count = counts[food];
      counts[food] = count ? count + 1 : 1;
    });
    element.favoriteFoods.fish.forEach(food =>{
      count = counts[food];
      counts[food] = count ? count + 1 : 1;
    });    
  });
  return counts;
}

console.log(returnFood(data));