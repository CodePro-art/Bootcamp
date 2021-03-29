import React, { useState } from "react";
import {list} from './List'
import Task from './Task'
import './Todo.css'

export default function TodoList() {

  const [todo] = useState(list);
  const renderList = arr => arr.map((task,i) => <Task key={i.toString()} title={task.name} status={task.completed}/>)
  
  return (
    <div className="todo-container">
      <h1>Todo List:</h1>
      <div className="list-container">
        {renderList(todo)}
      </div>
    </div>
  )
}
