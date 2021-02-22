const check = (color)=>{
  let col = color.toLowerCase();
  switch(col) {
    case "yellow":
    case "pink":
    case "orange":
      console.log('light color');
      break;
    case "blue":
    case "purple":
    case "brown":
      console.log('Dark color');
      break;
    default:
      console.log('Unknown color');
  }
}

check("Yellow");
check("green");
check("BLue");
check("Orange");
check("brown");