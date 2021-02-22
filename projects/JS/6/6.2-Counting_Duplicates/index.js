// Count the number of Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic characters and
// numeric digits that occur more than once in the input string. The input string can be assumed to
// contain only alphabets (both uppercase and lowercase) and numeric digits.
// Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice

const counter = (str) => {
  // ignore uppercases (case insensitinve)
  // remove spaces
  let string = str.toLowerCase().replace(/\s/g, '');
  let ch, count;
  let counts = {};
  for (let i = 0; i < string.length; ++i) {
      ch = str.charAt(i); 
      count = counts[ch];
      counts[ch] = count ? count + 1 : 1;
    }
  return counts;
}

const countDoplicates = (str) => Object.values(counter(str)).reduce((a,b) => {return b>1 ? a+1 : a},0)
 
 console.log(countDoplicates("indivisibilitiest"));
