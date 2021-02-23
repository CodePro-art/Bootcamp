const start = document.querySelector('body');
const ol = document.createElement("ol"); 

const users = [
{
id: 167464,
firstName: "Jimmy",
lastName: "Arnold",
email: "jimmya@gmail.com",
},
{
id: 578447,
firstName: "Martha",
lastName: "Goldman",
email: "gold@hotmail.com",
},
{
id: 864578,
firstName: "Tim",
lastName: "Burton",
email: "timmy.hotmail.com",
},
];


// 1
users.forEach(el=> { ol.innerHTML += `<li>${el.firstName} ${el.lastName} </li>`;});

// 2
ol.setAttribute("style", "list-style-type: none;");               
document.body.appendChild(ol);

const li = document.querySelectorAll('li');

// 3
users.forEach((el,i) => { 
  li[i].setAttribute("data-id",`${el.id}`)
});


