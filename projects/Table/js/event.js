// ======================================================================= //
// ============================ EVENTS =================================== //
// ======================================================================= //

// ----------------- Update event listeners ------------------------------ //
async function updateAddEventListener(){
  const edits = document.querySelectorAll('.btn-edit');
  const trash = document.querySelectorAll('.btn-trash');
  const confirm = document.querySelectorAll('.btn-confirm');

  edits.forEach((btn) => {
    btn.addEventListener('click',() => {
      btn.innerHTML = `<i class="fa fa-check" aria-hidden="true"></i>`;
      btn.classList.remove('btn-edit');
      btn.classList.add('btn-confirm');
    });
  });

  confirm.forEach((btn) => {
    btn.addEventListener('click',() => {
      btn.innerHTML = `<i class="fas fa-pen"></i>`;
      btn.classList.remove('btn-confirm');
      btn.classList.add('btn-edit');
    });
  });

  trash.forEach((btn) => {
    btn.addEventListener('click',() => {
      let id = btn.parentElement.parentElement.parentElement.firstElementChild.innerHTML;
      let index = appleseed.indexOf(id);
      appleseed.list.splice(index,1);
    });
  });
}