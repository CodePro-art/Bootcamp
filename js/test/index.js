const body = document.querySelector('body');

let endpoint = `https://appleseed-wa.herokuapp.com/api/users/`;

function createTable(){
  let arr = ["cell 1","cell 2","cell 3","cell 4"];
  const table = document.createElement('table');

  for(let i=0;i<3;i++){
    const tr = document.createElement('tr');
    arr.forEach((content)=>{
      const td = document.createElement('td');
      td.innerHTML = content;
      tr.appendChild(td);
    })
    table.appendChild(tr);
  }
  
  body.appendChild(table);
}

async function getAPI(endpoint) {
  try {
    let x = await fetch(endpoint);
    let y = await x.text();
    console.log(y);
  }
  catch(err) {
    console.log(err);
  }

}