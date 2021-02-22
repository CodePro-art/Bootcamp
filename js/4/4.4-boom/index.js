const boom = 7;

const num = (number)=>{
  // checking if number is negative
  if (number <= 0 || !Number.isInteger(number)) 
  console.log('Error! not a positive integer!');
  let array = [];
  for (let i = 1; i <= number; ++i)
    if (!(i % boom) || i%10 == boom || Math.floor(i / 10) == boom)
        array[i-1] = 'BOOM';
    else
        array[i-1] = i;

// Print the array
console.log(array.join(','));
}
num(15);
num(-10);
num(0);