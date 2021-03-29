import React, {useState} from 'react';
import { VscChromeMaximize ,VscCheck} from "react-icons/vsc";

export default function Task({title, status}) {
  
  const [state,setStatus] = useState(status);
  
  const renderIcon = bool => bool ? <VscCheck size={28}/> : <VscChromeMaximize size={28}/>;
  const renderTitle = bool => bool ? <del><h4>{title}</h4></del> : <h4>{title}</h4>;

  return (
    <div className="todo-task" onClick={()=> setStatus(!state)}>
      {renderIcon(state)}
      {renderTitle(state)}
    </div>
  )
}
