import React, { Component } from 'react'
import AnimatedBox from './BoxAnimation'
import './AnimatedBox.css'

export default class boxes extends Component {
  state ={
    small: "50px",
    medium: "100px",
    large: "150px"
  }

  render() {
    return (
      <div className="animated-box-container">
        <AnimatedBox color="blue" size={this.state.small}></AnimatedBox>
        <AnimatedBox color="green" size={this.state.medium}></AnimatedBox>
        <AnimatedBox color="red" size={this.state.large}></AnimatedBox>
      </div>
    )
  }
}
