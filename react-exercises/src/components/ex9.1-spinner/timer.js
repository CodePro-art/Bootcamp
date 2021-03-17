import React, { Component } from 'react'
import Spinner from './Spinner'

export default class timer extends Component {
  state = {
    timer: null,
    size: 10,
    current: 10,
    color: "black"
  }

  componentDidMount() {
    this.setState({
      timer: setInterval(() => {
        this.setState({ current: this.state.current - 1 });
      }, 1000),
      size: setInterval(() => {
        this.setState({ size: this.state.size - 0.1 });
      }, 100)
    })
  }

  componentDidUpdate(){
    if(!this.state.current){
      clearInterval(this.state.timer);
    }
  }


  render() {
    if(this.state.size === 0)
      return(
        <div className="loader-container">
        </div>
      )
    else
      return (
        <div className="loader-container">
          <Spinner size={this.state.size} current={this.state.current} color={this.state.color}></Spinner>
        </div>
      )
  }
}
