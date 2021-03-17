import React, { Component } from 'react'

export default class counter extends Component {
  render() {
    return (
      <h3 className="counter">
        {this.props.count}
      </h3>
    )
  }
}

