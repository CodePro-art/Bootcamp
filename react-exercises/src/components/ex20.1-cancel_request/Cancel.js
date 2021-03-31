import React, { useState, useEffect} from 'react';
import Switch from "react-switch";
// import axios,{AxiosResponse} from 'axios';
import './Cancel.css'

export default function Cancel() {

  const [state, setState] = useState(false);
  
  const handleChange = (checked) => {
    setState(checked)
  }

  useEffect(()=>{
    
  },[])

  return (
    <div className="cancel-container">
      <label className="axios-leak-container">
        <span className="axios-leak-title">Handle Memory Leak With Axios:</span>
        <Switch offColor="#666" onColor="#333" onChange={handleChange} checked={state} />
      </label>
  
    </div>
  )
}
