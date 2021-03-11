// ======================================================================= //
// ========================= MAIN JS FILE ================================ //
// ======================================================================= //

// ----------------------- PATHs for API request ------------------------- //
let path = "https://appleseed-wa.herokuapp.com/api/users/";

// -------------------------- Define Selectors --------------------------- //
const table = document.querySelector('.table');

// -------------------- Create Appleseed instance ------------------------ //
const appleseed = new Appleseed();

// ------------------------- Initialze Page ------------------------------ //
async function initPage(){

  storage = loadData();

  // appleseed <- data from: local-storage or API
  storage ? await fetchAllData() : appleseed = storage;
  
  createTable();
  
  appleseed.list.forEach(member => {
    addRow(member);
  });
  
  // storage = JSON.stringify(storage);

}




sortTable(table, false);
