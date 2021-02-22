function getDate(){
  const date = new Date();
  const days = ['Sunday','Monday','Tuesday','Wednsday','Thursday','Friday','Saturday'];
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let day = date.getDay();
  let dayInMonth = date.getDate();
  let month = date.getMonth();
  let year = date.getFullYear();
  return `Today is ${days[day]} the ${dayInMonth} of ${months[month]}, ${year}`;
}

console.log(getDate());