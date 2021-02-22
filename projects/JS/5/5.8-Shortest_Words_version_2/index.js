// Given a string of words, return the longest word[s].
// String will never be empty and you do not need to account for different data types.

const shortest = (str) => str.split(" ").sort((a,b) => b.length-a.length)[0].length;

console.log(shortest("It can be used to convert long to"));