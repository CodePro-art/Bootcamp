import React, {useState, useEffect} from 'react';
import { VscChromeMaximize ,VscVerified} from "react-icons/vsc";

export default function Item(props) {

  const [state,setStatus] = useState(props.check);
  useEffect(()=>{
    setStatus(props.check)
  },[props])
  const renderIcon = bool => bool ? <VscVerified size={28}/> : <VscChromeMaximize size={28}/>;

  return (
    <div className="check-list-item" onClick={()=> setStatus(!state)}>
      {renderIcon(state)}
      <h4>{props.content}</h4>
    </div>
  )
}
