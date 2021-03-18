import React, { Component } from 'react'

export default class CustomButton extends Component {
  
  
  render() {
    return (
      <div>
        <button className="custom-button" style={{backgroundColor: this.props.color}}></button>
      </div>
    )
  }
}
