import React from 'react'

export default function TimeItem(props) {


  return (
    <div className="time-item">
      <label className="time-label" htmlFor={props.type}>{props.type.toUpperCase()}:</label>
      <input type="text" className="time-input" id={props.type}/>
    </div>
  )
}
