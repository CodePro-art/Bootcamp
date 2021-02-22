// Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the
// longest possible, containing distinct letters,
// each taken only once - coming from s1 or s2.
// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"
// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

const longest = (str1,str2) => {
  let str ='';
  str1 = str1.toLowerCase();
  str2 = str1.toLowerCase();
  console.log(str1);
  for (let i = 97; i < 123 ;i++)
    str +=  include(str1,str2,i);
  return str;
};

const include = (a, b, i) => a.includes(String.fromCharCode(i)) || b.includes(String.fromCharCode(i)) ? String.fromCharCode(i) : "";

console.log(longest("AsUab","ud"));