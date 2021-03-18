import React, { Component } from 'react'
import Button from './CustomButton'
import './CustomButtons.css'

export default class ColorButtons extends Component {
  
  state={
    colors: ["blue","red", "yellow"],
    selected: ''
  }

  updateColor = (color) => {
    this.setState({selected: color})
  }

  renderButtons = () => this.state.colors.map((color) => <Button sendColor={this.updateColor} color={color}></Button>)

  render() {
    
    return (
      <div className="buttons-container">
        {this.renderButtons()}
        <h2 className="note-color">The selected color is: {this.state.selected}</h2>
      </div>
    )
    
    
  }
}
