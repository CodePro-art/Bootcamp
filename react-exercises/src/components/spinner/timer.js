import React, { Component } from 'react'
import Spinner from './spinner'

export default class timer extends Component {
  state = {
    timer: null,
    current: 10,
    color: "black"
  }

  componentDidMount() {
    this.setState({
      timer: setInterval(() => {
        this.setState({ current: this.state.current - 1 });
      }, 1000)
    })
  }


  componentDidUpdate(){
    if(!this.state.current){
      clearInterval(this.state.timer);
    }
  }



  render() {
    if(this.state.current === 0)
      return(
        <div className="loader-container">
        </div>
      )
    else
      return (
        <div className="loader-container">
          <Spinner current={this.state.current} color={this.state.color}></Spinner>
        </div>
      )
  }
}
