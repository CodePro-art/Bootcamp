import React, { Component } from 'react'

export default class alternateBox extends Component {
  
  // constructor
  state ={
    color: 0,
    shape: 0
  }

  componentDidMount(){
    setInterval(() => this.setState({color: (this.state.color + 36)%360}), 500);
    setInterval(() => this.setState({shape: this.state.shape ? 0 : 50}), 2500);

  }
  
  render() {
    return (
        <div className="alternating-box" style={{backgroundColor: `hsl(${this.state.color},100%,50%)`,borderRadius: `${this.state.shape}%`}}>
        </div>
    )
  }
}
