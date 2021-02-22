const isLeapYear = (year)=>{
  if (!(year%4) && !(year%100) && !(year%400))
    console.log("It is indeed a leap year.");
  else if (!(year%4) && !(year%100))
    console.log("This is not a leap year.");
  else if (!(year%4))
    console.log("It is indeed a leap year.");
  else
    console.log("This is not a leap year.");
}

isLeapYear(2012);
isLeapYear(2100);
isLeapYear(2400);