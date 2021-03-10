// ==============================================================================//
// ========================== CLASS DEFINITION ==================================//
// ==============================================================================//
class Task {
  // constructor for new task
  constructor(_id,_content){
    this.id = _id;
    this.content = _content;
    this.importance;
    this.pending = true;
  }

  // create list item
  createListItem(){
    
    let li = document.createElement("li");
    li.className = "task";

    // create task line: checkbox | text | trash
    li.innerHTML = `<i class="fa fa-square-o check-${this.id}" aria-hidden="true"></i>`;
    li.innerHTML += `<input id="task-${this.id}" class="task" value="${this.content}" maxlength="40" size="50"></input>`;
    li.innerHTML += `<i id="delete-icon-${this.id}" class="far fa-trash-alt small">`;

    // get rid of input's content
    input.value = "";

    // append the list item
    display.appendChild(li);
    return li;
  }


  // Append task into the html
  append(){

    // create list item
    let listItem = this.createListItem();

    // adjuct paper height 
    adjustPaperHight("add");

    // select the specific task | checkbox | trash-icon
    let task = document.querySelector(`#task-${this.id}`);
    let checkbox = document.querySelector(`.check-${this.id}`);
    let trash = document.querySelector(`#delete-icon-${this.id}`);

    // Upon click enable editing: enter| blur to confirm change
    listItem.addEventListener("click", () => {

      // update upon Enter key press
      task.addEventListener("keyup", (event) => {
        if (event.keyCode === 13){
          this.content = task.value;
          task.blur();
        }
      });

      // update upon blur: getting out of focus
      task.addEventListener("blur", () => {
        this.content = task.value;
      });
    });
    
    // define event litener to checkbox
    checkbox.addEventListener("click", ()=>{
      if(checkbox.classList.contains(`fa-square-o`)){
        checkbox.className = `far fa-check-square check-${this.id}`;
        this.pending = false;
        task.classList.add('lineThrough');
        display.appendChild(listItem);
      }else{
        checkbox.className = `fa fa-square-o check-${this.id}`;
        task.classList.remove('lineThrough');
        this.pending = true;
        display.insertBefore(listItem, display.firstChild);
      }
    });

    // define event litener to trash icon
    trash.addEventListener('click',() => {
      todo.removeTask(this.id);
      listItem.remove();
      adjustPaperHight("remove");
    });
  }
}

class Todo {

  static id = 1;

  // Construct an empty list
  constructor(){
    this.list =[];
  }

  // Create and add new task to the todo list
  newTask(){
    let listItem = document.createElement("li");
    listItem.appendChild(document.createTextNode(input.value));
    let task = new Task(Todo.id++,listItem.textContent);
    this.list.push(task);
    task.append();
    return task;
  }

  // Find the index of a task with a given id on the todo list
  indexOf(id){
    for(let i=0;i<this.list.length;i++)
      if(this.list[i].id === id)
        return i;
  }

  // Remove task with a given id from the todo list
  removeTask(id){
    let index = this.indexOf(id);
    this.list.splice(index,1);
  }

  // Erase all tasks
  eraseList(){
    this.list = [];
  }
}