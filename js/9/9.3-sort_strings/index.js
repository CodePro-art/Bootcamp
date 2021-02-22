const foods = ["falafel", "sabich", "hummus", "pizza with extra pineapple"];
const foodsWithUpperCase = ["falafel","Sabich","hummus","pizza with extra pineapple",];
const words = ["apple", "supercalifragilisticexpialidocious","hi", "zoo"];

// a
foods.sort();

// b
foodsWithUpperCase.sort((a,b) =>{
  a = a.toLowerCase();
  b = b.toLowerCase();
  if(a == b) return 0;
  return a < b ? -1 : 1;
});

// c
words.sort((a,b) =>{
  return a.length -b.length;
});

