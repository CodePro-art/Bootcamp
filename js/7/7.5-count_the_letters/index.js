const array = ["Hello", "Good Day", "Your Welcome", "hotdog","hamburgers"];

function counter(arr){
  let str;
  let len = arr.length;
  let str_len;
  let counts = {};
  let ch, count;

  for(let j = 0; j<len ;j++){
    // copy string to str
    str = arr[j].toLowerCase();
    // Remove spaces from str
    str = str.replace(/\s/g, '');
    str_len = str.length;
    for (let i = 0; i < str_len; ++i) {
      ch = str.charAt(i); 
      count = counts[ch];
      counts[ch] = count ? count + 1 : 1;
    }
  }
  return counts;
}
let counts = counter(array);
let sortable = [];
for (let letter in counts) {
    sortable.push([letter, counts[letter]]);
}

sortable.sort(function(a, b) {
    return a[1] - b[1];
});

console.log(counts);
console.log(sortable[sortable.length-1]);



