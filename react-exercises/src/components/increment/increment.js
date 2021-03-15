import React, { Component } from 'react';
import Counter from './counter';
import PlusButton from './plus';
import MinusButton from './minus';

export default class increment extends Component {
  constructor(props){
    super(props);
    this.state = {count: 0}
  }
  
  render() {
    return (
      <div>
        <PlusButton count={this.state.count} increaseCount={(count) => this.setState({count})}/>
        <MinusButton count={this.state.count} decreaseCount={(count) => this.setState({count})}/>
        <Counter count={this.state.count} />
      </div>
    )
  }
}
