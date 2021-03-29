import React from 'react'
import TimeItem from './TimeItem'
import './Time.css'

export default function Time() {

  const types = ["seconds","minutes","hours"];
  const renderTime = arr => arr.map(t => <TimeItem type={t} />);

  return (
    <div className="time-container">
      <div className="box1">
        <h1 className="time-title">Time Coverter:</h1>
        {renderTime(types)}
      </div>
    </div>
  )
}
