// returns true if the string has uppercase
function hasUpperCase(str) {
  return (/[A-Z]/.test(str));
}
// Function 1 - if/else
const checkPassword = (password)=>{
  if (typeof(password) != "string")
    return "This password must be a string."
  else if (password.length > 7)
    return "Strong";
  else
    return "Weak";
}
// Function 2 - tenery condition
const tenery = password => password.length > 7 ? 'Strong' : 'Weak';

// Funtion 3 - use && logical expression
const teneryAnd = password => (password.length < 7 && password.length > 0)? 'Weak' : 'Strong';

// Function 4 - advanced function:  && 
const advanced = password => {
  if (hasUpperCase(password) && password.length > 7)
    return 'Very Strong';
  else if (!hasUpperCase(password) && password.length > 7)
    return 'Strong';
  else
    return 'Weak';
}

console.log(advanced("Avocaaado"));
console.log(teneryAnd("LPOidhtdjhkd"))
console.log(checkPassword("NormalPassword"));
console.log(tenery("jhkd"));

