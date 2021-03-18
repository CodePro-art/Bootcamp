import React, { Component } from 'react'
import './LifeCycle.css'
import Text from './Text'

export default class favoriteColor extends Component {
  // constructor
  state = {favoriteColor: "blue",text: "My"}

  // on mount change color to red 
  componentDidMount(){
    setTimeout(() => this.setState({favoriteColor: "red",text: "The updated"}), 1000);
  }


  render() {
    return (
      <div className={this.state.favoriteColor}>
        <Text text={this.state.text} fav={this.state.favoriteColor}></Text>
      </div>
    )
  }
}
