import React, { Component } from 'react'

export default class Input extends Component {

  render() {
    return (
      <div className="input-container">
        <input className="search-bar" type="text" placeholder="search..." onChange={(e) => {this.props.sendInput(e.target.value) }}/>
      </div>
    )
  }
}
