// ======================================================================= //
// ========================= MAIN JS FILE ================================ //
// ======================================================================= //

// ----------------------- PATHs for API request ------------------------- //
let path = "https://appleseed-wa.herokuapp.com/api/users/";

// -------------------- Create Appleseed instance ------------------------ //
let appleseed = new Appleseed();

// ------------------------- Initialze Page ------------------------------ //
async function initPage(){
  
  // appleseed <- data from: local-storage or API
  storage = loadData();
  storage ? appleseed = storage : await fetchAllData();
  
  // Create page layout + table
  createPageLayout();
  
}



// storage = JSON.stringify(storage);
// sortTable(table, false);
