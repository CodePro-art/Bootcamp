import React, {useState} from 'react';

export default function TimeItem(props) {

  const re = /^[0-9\b]+$/;
  const [input,setInput] = useState(props.time || '');

  const callback= (time) => {
    if (time === '' || re.test(time)){
      setInput(time)
      props.sendTime(time*props.multiplyer)
    }
  }
  
  return (
    <div className="time-item">
      <label className="time-label" htmlFor={props.type}> 
        {props.type.toUpperCase()}: 
      </label>
      
      <input 
        type="text" 
        className="time-input" 
        id={props.type}
        value={input}
        autoComplete="off"
        onChange={(e) => callback(e.target.value) }
      />
    </div>
  )
}
