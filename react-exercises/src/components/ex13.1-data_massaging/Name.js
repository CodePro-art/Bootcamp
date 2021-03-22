import React, { Component } from 'react'

export default class Name extends Component {
  render() {
    return (
      <div className="name-container">
        <p>{this.props.name}</p>
      </div>
    )
  }
}
