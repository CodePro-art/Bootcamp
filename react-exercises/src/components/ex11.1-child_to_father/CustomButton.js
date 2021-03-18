import React, { Component } from 'react'

export default class CustomButton extends Component {
  
  callback=()=>{
    this.props.sendColor(this.props.color)
  }

  render() {
    return (
      <div>
        <button 
        className={`custom-button ${this.props.color}-btn`} 
        style={{backgroundColor: this.props.color}}
        onClick={this.callback}
        >
          {this.props.color}
        </button>
      </div>
    )
  }
}
