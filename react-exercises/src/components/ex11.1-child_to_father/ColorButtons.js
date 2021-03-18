import React, { Component } from 'react'
import Button from './CustomButton'

export default class ColorButtons extends Component {
  
  state={
    selected: ''
  }

  updateColor = (color) => {
    this.setState({selected: color})
  }

  render() {
    return (
      <div>
        
      </div>
    )
  }
}
