class Task {
  // constructor for new task
  constructor(_id,_content){
    this.id = _id;
    this.content = _content;
    this.pending = true;
  }

  // function to update/edit the task content
  edit(_content){
    this.content = _content;
  }

  // Append task into the html
  append(){
    let listItem = document.createElement("li");
    listItem.className = "create";
    listItem.innerHTML = `<span class="task" contenteditable spellcheck="false">${this.content}</span>`;
    display.appendChild(listItem);
    input.value = "";
  }
}

class Todo {

  static id = 0;

  // Construct an empty list
  constructor(){
    this.list =[];
  }

  // Create and add new task to the todo list
  newTask(){
    let listItem = document.createElement("li");
    listItem.appendChild(document.createTextNode(input.value));
    let task = new Task(Task.id++,listItem.textContent);
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