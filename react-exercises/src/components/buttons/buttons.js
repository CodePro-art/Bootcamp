import React from 'react'
import Btn from './button'

export default function buttons() {
  return (
    <div className="button-container">
      <Btn className="bold" value="important"></Btn>
      <Btn value="not important"></Btn>
    </div>
  )
}
