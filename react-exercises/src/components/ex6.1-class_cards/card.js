import React, { Component } from 'react'

export default class card extends Component {
  render() {
    return (
      <div className="card-container">
        <img className="image" src={this.props.src} alt="Avatar"></img>
        <div className="detail-container">
        <h4><b>{this.props.name}</b></h4>
        <p>{this.props.decription}</p>
      </div>
    </div>
    )
  }
}
