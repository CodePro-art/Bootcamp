const food = ["Noodle", "Pasta", "Ice-cream", "Meat",
"Cucumber", "Olives"];
const food1 = ["Fries", "Ice-cream", "Pizza", "Olives",
"Hamburgers"];


const compare = (arr1,arr2) => {
  let result = [];
  for (element of arr1)
    if (arr2.includes(element))
      result.push(element);
  return result.length ? result : false;
}

