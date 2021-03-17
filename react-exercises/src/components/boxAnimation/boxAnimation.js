import React, { Component } from 'react'

export default class boxAnimation extends Component {
  state = {
    size: this.props.size,
    color: this.props.color,
    currentPosition: 0,
    opacity: 0
  }
  componentDidMount(){
    setTimeout(() => this.setState({favoriteColor: "red",text: "The updated"}), 1000);
  }
  
  render() {
    return (
      <div 
      className={"animated-box "+ this.state.color + "-box"} 
      style={{height: this.state.size, width: this.state.size}}
      />
    )
  }
}
