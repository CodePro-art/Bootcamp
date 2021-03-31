import React, {useState, useEffect} from 'react';

export default function TimeItem(props) {

  // Regex for numbers and backspace only
  const re = /^[0-9\b]+$/;

  // Define useState for the input text. Default = ' ' 
  const [input,setInput] = useState(props.time || '');

  // Callback function to send the user's input back
  const callback= (time) => {
    if (time === '' || re.test(time)){
      setInput(time)
      props.sendTime(time*props.converter)
    }
  }

  useEffect(() => {
    setInput(props.time)
  }, [props.time])

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
        onClick={(e)=>{e.target.select()}}
        onChange={(e) => callback(e.target.value) }
      />
    </div>
  )
}
