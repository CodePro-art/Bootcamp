import React, { Component } from 'react'
import './Spinner.css'

export default class spinner extends Component {
  render() {
    return (
      <div className="spinner-container"
      style={{height:`${this.props.size*20}px`,width: `${this.props.size*20}px`}}>
        <div className="spinner" style={{fontSize: `${this.props.current*4}px`}}>
          <div className="counter-container" style={{color:`${this.props.color}`}}>
            <h1>{this.props.current}</h1>
          </div>
        </div>
      </div>
    )
  }
}
