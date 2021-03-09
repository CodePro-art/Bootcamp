class Task {
  // constructor for new task
  constructor(_id,_content){
    console.log(_id);
    this.id = _id;
    this.content = _content;
    this.pending = true;
  }

  // Append task into the html
  append(){
    let listItem = document.createElement("li");
    listItem.className = "task";
    listItem.innerHTML = `<input type="checkbox" class="checkbox" id="${this.id}" name="task-${this.id}" value="${this.content}"></input>`;
    listItem.innerHTML += `<input class="task" value="${this.content}" maxlength="40" size="50"></input>`;
    
    listItem.addEventListener("click", () => {
      // update upon Enter key press
      listItem.lastElementChild.addEventListener("keyup", (event) => {
        if (event.keyCode === 13){
          this.content = listItem.lastElementChild.value;
          listItem.lastElementChild.blur();
        }
      });

      // update upon blur
      listItem.lastElementChild.addEventListener("blur", () => {
        this.content = listItem.lastElementChild.value;
      });
     
    });
    display.appendChild(listItem);
    input.value = "";
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
    this.list[index].splice(index,1);
  }
  
  // Update task with a given id in the todo list
  updateTask(id,content){
    let index = this.indexOf(id);
    this.list[index].edit(content);
  }

}