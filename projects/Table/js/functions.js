// ======================================================================= //
// ============================ FUNCTIONS ================================ //
// ======================================================================= //

// ------------------------ FETCH FROM API ------------------------------- //
async function getAPI(){
  try{
    const promise = await fetch(path);
    return await promise.json();
  }catch(err){
    console.log(err);
  }
}

// ------------------------ Insert info ino the class --------------------- //
function insertDataToClass(main,secondary){
  appleseed.addMember(main,secondary);
}

// ------------------------- FETCH secondary data ------------------------- //
async function getSecondary(main){
  for(let i=0; i<main.length ;i++){
    const promise = await fetch(path + `${main[i].id}`);
    let secondary = await promise.json();
    insertDataToClass(main[i],secondary);
  }
}

// ------------------------- FETCH All data ------------------------------- //
async function fetchAllData(){
  try{
    const main = await getAPI();
    await getSecondary(main);
    saveData();
  }catch(err){
    console.log(err);
  }
}

// --------------------- LOCAL STORAGE - save ----------------------------- //
function saveData(){
  localStorage.setItem('storage', JSON.stringify(appleseed));
}

// -------------------- LOCAL STORAGE - load ------------------------------ //
function loadData(){
  let storage = localStorage.getItem('storage');
  return JSON.parse(storage);
}

// ------------------------- Create page layout ---------------------------- //
function createPageLayout(){

  // Create container to the page
  const container = document.createElement("div");
  container.className ="container";
  document.body.appendChild(container);

  // Add header
  addHeader();
  // create table head
  createTable();
  
  // Add data to the table
  appleseed.list.forEach(member => {
    addRow(member);
  });
}

// ------------------------- Create Table --------------------------------- //
function createTable(){
  const container = document.querySelector('.container');
  const table = document.createElement('table');
  const thead = document.createElement('thead');
  const tbody = document.createElement('tbody');
  
  table.className = "table";
  thead.innerHTML = `
    <tr>
      <th>ID</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Capsule</th>
      <th>Age</th>
      <th>City</th>
      <th>Gender</th>
      <th>Hobby</th>
      <th data-sortable="false">Actions</th>
    </tr>`;
  table.appendChild(thead);
  table.appendChild(tbody);
  container.appendChild(table);
}

// ------------------------- Add row to Table ------------------------------ //
function addRow(member){
  const tbody = document.querySelector("tbody");
  const row = document.createElement("tr");
  row.innerHTML = `
  <tr>
    <td>${member.id}</td>
    <td>${member.firstName}</td>
    <td>${member.lastName}</td>
    <td>${member.capsule}</td>
    <td>${member.age}</td>
    <td>${member.city}</td>
    <td>${member.gender}</td>
    <td>${member.hobby}</td>
    <td>
      <div class="btn-group btn-group-sm" role="group">
        <button type="button" class="btn"><i class="fas fa-pen"></i></button>
        <button type="button" class="btn"><i class="fas fa-trash"></i></button>
      </div>
    </td>
  </tr>`;
  tbody.appendChild(row);
}

// ------------------------- Add header to page ------------------------------ //
function addHeader(){
  const container = document.querySelector('.container');
  const head = document.createElement("header");
  head.innerHTML = `
  <h3>Table</h3>
      <section class="search-container">
        <input oninput="updateResult(this.value)" type="search" placeholder="Search...">
        <select name="category" id="category">
          <option value="Search by" selected disabled hidden>Search by</option>
          <option value="id">ID</option>
          <option value="First Name">First Name</option>
          <option value="Last Name">Last Name</option>
          <option value="Capsule">Capsule</option>
          <option value="Age">Age</option>
          <option value="City">City</option>
          <option value="Gender">Gender</option>
          <option value="Hobby">Hobby</option>
        </select>
      </section>`;
  container.appendChild(head);
}

// --------------------------- Update Results -------------------------------- //
function updateResult(query) {
  let table = document.querySelector(".table");
  table.innerHTML = "";

  arr.map(function(algo){
    query.split(" ").map(function (word){
      if(algo.toLowerCase().indexOf(word.toLowerCase()) != -1){
        table.innerHTML += `<li class="list-group-item">${algo}</li>`;
      }
    })
  })
}

// --------------------------- Get cell value -------------------------------- //
const getCellValue = cell => cell.innerText || cell.textContent;

// -------------------------- Compare cell value ----------------------------- //
const compareValue = (valueOne, valueTwo) => {
  return (
    valueOne !== '' && valueTwo !== '' &&
    !isNaN(valueOne) && !isNaN(valueTwo)
  )
    ? valueOne - valueTwo
    : valueOne.toString().localeCompare(valueTwo.toString());
}
// -------------------------- Compare cell value ----------------------------- //
const sort = (tBody, index, sortDirection) => {
  const tbodyRows = [...tBody.rows];
  
  const sortedRows = tbodyRows.sort((a, b) => {
    const aCellValue = getCellValue(a.cells[index]);
    const bCellValue = getCellValue(b.cells[index]);
    return sortDirection ? compareValue(aCellValue, bCellValue) : compareValue(bCellValue, aCellValue);
  });

  while(tBody.firstElementChild) {
    tBody.removeChild(tBody.lastElementChild);
  }
  documentFragment.append(...sortedRows);
  tBody.appendChild(documentFragment);
}   

// ------------------------------- Sort Table -------------------------------- //
const sortTable = (element, ascending = true) => {
  
  const [arrowUp, arrowDown, arrowUpDown] = ['\u2191', '\u2193', '\u21C5'];
  const { tHead, tBodies } = element;
  const [tBody] = tBodies; // tBodies[0]
  const theadCells = tHead.querySelectorAll('th:not([data-sortable="false"])'); // select: 8 th's: id,fn,ln,capsule..
 
  
  if (!element.classList.contains('table-sortable')) {
    element.classList.add('table-sortable');
  }
  
  theadCells.forEach((theadCell, index) => {
    let isAscending = !ascending;
    
    theadCell.dataset.sortDirection = arrowUpDown;
    
    theadCell.addEventListener('click', e => {
      theadCells.forEach(cell => {
        if (cell.dataset.sortDirection !== arrowUpDown) {
          cell.dataset.sortDirection = arrowUpDown;
        }
      });
      
      e.target.dataset.sortDirection = isAscending ? arrowUp : arrowDown;
     
      sort(tBody, index, isAscending);
      isAscending = !isAscending;
    });
  });
  
  // Sort the first column/cell by default
  theadCells[0].dataset.sortDirection = ascending ? arrowUp : arrowDown;
  sort(tBody, 0, ascending);
}
