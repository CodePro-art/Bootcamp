import React, { Component } from 'react';
import Counter from './counter';
import PlusButton from './plus';
import MinusButton from './minus';
import './counter.css'
export default class increment extends Component {
  constructor(props){
    super(props);
    this.state = {count: 0}
  }
  
  render() {
    return (
      <div className="counter-wrapper">
        <div className="counter-container">
          <PlusButton count={this.state.count} increaseCount={(count) => this.setState({count})}/>
          <Counter count={this.state.count} />
          <MinusButton count={this.state.count} decreaseCount={(count) => this.setState({count})}/>
        </div>
      </div>
      
    )
  }
}
