import React, { Component } from 'react'

export default class Input extends Component {
  render() {
    return (
      <div className="input-container">
        <label classNJame="form-label" for={this.props.id}>{this.props.text}</label>
        <input 
        className="form-input" 
        type={this.props.type} 
        id={this.props.id} 
        name={this.props.id}
        placeholder={this.props.placeholder}
        ></input>
      </div>
    )
  }
}
