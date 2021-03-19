import React, { Component } from 'react'

export default class Bullet extends Component {

  callback=()=>{
    this.props.sendCheck(!this.props.check, this.props.index)
  }

  render() {
    return (
      <div>
        <input 
        type="checkbox" 
        lable={this.props.text} 
        className="check-custom" 
        checked={this.props.check}
        onChange={this.callback}
        />
        <label >{this.props.text}</label>
      </div>
    )
  }
}
