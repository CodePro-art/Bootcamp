import React from 'react'
import Btn from './Button'
import './Buttons.css'

export default function buttons() {
  return (
    <div className="buttons-wrapper">
      <div className="button-container">
        <Btn className="bold" value="important"></Btn>
        <Btn value="not important"></Btn>
      </div>
    </div>
    
  )
}
