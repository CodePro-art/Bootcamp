import React, {useState} from 'react';
import TimeItem from './TimeItem'
import './Time.css'

export default function Time() {
  
  const [time,setTime] = useState('');
  const types = ["seconds","minutes","hours"];
  const mult = [60,1,1/60];

  const updateTime = result => setTime(result);

  const renderTime = (arr,time) => 
    arr.map((e,i) => 
      <TimeItem key={i.toString()} type={e} time={time*mult[i]}multiplyer={mult.reverse()[i]} sendTime={updateTime}/>);
    
  return (
    <div className="time-container">
      <div className="box1">
        <h1 className="time-title">Time Coverter:</h1>
        {renderTime(types,time)}
      </div>
    </div>
  )
}
