import React, { Component } from 'react'
import Shape from './alternateBox'
import './ChangingBox.css'

export default class changingBox extends Component {
 
  render() {
    return (
      <div className="alternate-box-container">
        <Shape></Shape>
      </div>
    )
  }
}

