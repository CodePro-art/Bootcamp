import React, { useState } from "react";
import {list} from './List'
import Task from './Task'

export default function TodoList() {

  const [todo, setTodo] = useState(list);
  const renderList = arr => arr.map(task => <Task title={task.name} status={task.completed}/>)
  return (
    <div className="todo-container">
      {renderList(todo)}
    </div>
  )
}
