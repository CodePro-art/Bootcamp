import React, { Component } from 'react';
import Box from './box';
import Button from './button';
import './HideAndSeek.css';

export default class hideAndseek extends Component {
  constructor(props){
    super(props);
    this.state = {visible: true}
  }

  render() {
    
    return (
      <div className="hide-seek-container">
        <Button toggle={() => this.setState({visible: !this.state.visible})}/>
        <Box visible={this.state.visible} />
      </div>
    )
  }
}
