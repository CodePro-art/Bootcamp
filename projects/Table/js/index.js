// ======================================================================= //
// ========================= MAIN JS FILE ================================ //
// ======================================================================= //

// ----------------------- PATHs for API request ------------------------- //
let path = "https://appleseed-wa.herokuapp.com/api/users/";

// -------------------- Create Appleseed instance ------------------------ //
const appleseed = new Appleseed();

// ------------------------- Initialze Page ------------------------------ //
async function initPage(){

  storage = loadData();

  // appleseed <- data from: local-storage or API
  storage ? await fetchAllData() : appleseed = storage;
  
  
  
  // storage = JSON.stringify(storage);

}
