import React from 'react'

export default function Task({title, status}) {

  const [checked, setChecked] = React.useState(status);
  
  return (
    <div className="todo-task">
      <input type="checkbox" defaultChecked={checked} onChange={() => setChecked(!checked)}/>
      <h4>{title}</h4>
    </div>
  )
}
