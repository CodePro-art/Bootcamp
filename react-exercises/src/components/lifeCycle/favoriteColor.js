import React, { Component } from 'react'

export default class favoriteColor extends Component {
  // constructor
  state = {favoriteColor: "blue"}

  // on mount change color to red 
  componentDidMount(){
    setTimeout(() => this.setState({favoriteColor: "red"}), 1000);
  }

  // on update change color of text
  componentDidUpdate(){
    
  }

  render() {
    return (
      <div >
        <h1>My favorite color is {this.state.favoriteColor}</h1>
      </div>
    )
  }
}
