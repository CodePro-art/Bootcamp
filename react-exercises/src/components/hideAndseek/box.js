import React, { Component } from 'react'

export default class box extends Component {
  render() {
    return (
      <div className="shy-box" style={{display: this.props.visible ? "block": "none"}}>
      </div>
    )
  }
}
