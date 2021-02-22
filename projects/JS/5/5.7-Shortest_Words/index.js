// Simple, given a string of words, return the length of the shortest word(s).
// String will never be empty and you do not need to account for different data types.

const shortest = (str) => str.split(" ").sort((a,b) => a.length-b.length)[0].length;

console.log(shortest("It can be used to convert long to"));