import React, {useState} from 'react';
import TimeItem from './TimeItem'
import './Time.css'

export default function Time() {
  
  // Initialize time to empty string
  const [time,setTime] = useState('');

  // Define time converter array and input types:
  const types = ["seconds","minutes","hours"];
  const conv  = [    60   ,    1    ,  1/60 ];

  // get the time from child component
  const updateTime = result => setTime(result);

  // render child component using "time" state info. default = ' '
  const renderTime = (arr,time) => arr.map((e,i) => <TimeItem key={i.toString()} type={e} time={time*conv[i]} converter={conv.reverse()[i]} sendTime={updateTime}/>);
  
  // Render!
  return (
    <div className="time-container">
      <div className="box1">
        <h1 className="time-title">Time Coverter:</h1>
        {renderTime(types,time)}
      </div>
    </div>
  )
}
