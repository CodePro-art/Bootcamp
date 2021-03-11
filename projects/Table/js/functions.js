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
