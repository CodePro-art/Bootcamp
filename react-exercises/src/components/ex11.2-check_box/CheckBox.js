import React, { Component } from 'react'
import Bullet from './Bullet'
import './CheckBox.css'

export default class CheckBox extends Component {

  state={
    bullets: [
      " I have read the terms of the app.",
      " I accept the terms of the app.",
      " I want to get the weekly news letter.",
      " I want to get sales and offers."
    ],
    check: [false,false,true,true]
  }

  updateCheckBox = (stat,index) => {
    let arr = this.state.check;
    arr[index] = stat;
    this.setState({check: arr})
  }

  renderBullets = () => this.state.bullets.map((text,i) => {
    return(
      <Bullet 
      text={text} 
      sendCheck={this.updateCheckBox} 
      check={this.state.check[i]}
      index={i}
      ></Bullet>
    )
  })

  render() {
    return (
      <div className="form-container">
        <form className="checkbox-form">
        {this.renderBullets()}
        </form>
      </div>
    )
  }
}
