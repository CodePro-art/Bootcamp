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
  console.log(input);
  return (
    <div className="time-item">
      <label className="time-label" htmlFor={props.type}> 
        {props.type.toUpperCase()}: 
      </label>
      
      <input 
        type="text" 
        className="time-input" 
        id={props.type}
        value={props.time}
        autoComplete="off"
        onClick={(e)=>{e.target.select()}}
        onChange={(e) => callback(e.target.value) }
      />
    </div>
  )
}
