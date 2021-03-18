import React from 'react'
import Btn from './Button'
import './Buttons.css'

export default function Buttons() {
  return (
    <div className="buttons-wrapper">
      <div className="button-container">
        <Btn className="bold" value="important"></Btn>
        <Btn className="not-bold" value="not important"></Btn>
      </div>
    </div>
    
  )
}
