const grade = function(score){
  if (isNaN(score))
    return "That is not a valid score!";
  else if (score>=0 && score<65)
    return 'F';
  else if (score>=65 && score<70)
    return 'D';
  else if (score>=70 && score<80)
    return 'C';
  else if (score>=80 && score<90)
    return 'B';
 else if (score>=90 && score<=100)
    return 'A';
}

score = 96;
console.log(grade(score));