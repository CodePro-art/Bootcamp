var numSiblings = prompt('How many siblings do you have?');
var a = parseInt(numSiblings);
if (isNaN(a))
  alert('please enter numbers only!');
else if (a === 1) 
  alert('1 sibling!');
else if (a >= 1)
  alert('More than 1 sibling');
else
  alert('No siblings');

  // the operator == equates only the value and not the type! that's the reason that we get wrong answer.
  // When we use the string '1', line 5 in the code notices that its value is one but the type doesn't match up.