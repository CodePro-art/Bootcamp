import React, { Component } from 'react'
import Input from './Input'
import TextArea from './TextArea'
import './FormReview.css'

export default class FormReview extends Component {

  state={
    types: ["text","text","number","email"],
    ids: ["fname","lname","age","email",],
    text: ["First Name: ","Last Name: ","Age: ","E-mail: "],
    placeHolders: ["First name","Last name","Age","E-mail"],
    fname: '',
    lname: '',
    age: '',
    email: '',
    freeText: '',
  }

  updateForm = () => {
    
  }

  renderForm = () => this.state.types.map((type,i) => {
    return(
      <Input 
      type={type}
      text={this.state.text[i]} 
      id={this.state.id}
      placeholder={this.state.placeHolders[i]}
      sendInput={this.updateForm} 
      />
    )
  })
  
  render() {
    return (
      <div className="form-review-container">
        <form className="review-form" action="">
          {this.renderForm()}
          <TextArea/>
          <input className="form-input btn" type="submit" value="Submit"></input>
        </form>
      </div>
    )
  }
}
