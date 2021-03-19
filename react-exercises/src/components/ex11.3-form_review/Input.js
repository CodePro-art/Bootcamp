import React, { Component } from 'react'

export default class Input extends Component {

  callback=(event)=>{
    this.props.sendInput(event.target.value,this.props.id)
  }

  renderCondition = () =>{
    if(this.props.type === "textArea"){
      console.log("text area");
      return (
        <div className="text-area-container">
          <label htmlFor="free-text">{this.props.text}</label><br/>
          <textarea 
            className="form-input" 
            rows= "5"
            id="free-text" 
            name="free-text" 
            defaultValue={this.props.value}
            placeholder={this.props.placeholder}
            onChange={this.callback}
          />
        </div>
      )
    }else{
      return (
        <div className="input-container">
          <label className="form-label" htmlFor={this.props.id}>{this.props.text}</label>
          <input 
            className="form-input" 
            type={this.props.type} 
            id={this.props.id} 
            name={this.props.id}
            defaultValue={this.props.value}
            placeholder={this.props.placeholder}
            onChange={this.callback}
          />
        </div>
      )
    }
  }

  render() {
    return (
      <div className="input-container">
        {this.renderCondition()}
      </div>
    )
  }
}
