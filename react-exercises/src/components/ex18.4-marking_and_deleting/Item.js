import React, {useState} from 'react';
import { VscChromeMaximize ,VscVerified} from "react-icons/vsc";

export default function Item({content,id,sendData}) {

  const [state,setStatus] = useState('');
  const renderIcon = bool => bool ? <VscVerified size={28}/> : <VscChromeMaximize size={28}/>;


  return (
    <div className="check-list-item" onClick={()=> {
      setStatus(!state)
      sendData(state,id);
    }}>
      {renderIcon(state)}
      <h4>{content}</h4>
    </div>
  )
}
