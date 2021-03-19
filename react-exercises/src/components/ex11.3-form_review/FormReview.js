import React, { Component } from 'react'
import Input from './Input'
import './FormReview.css'

export default class FormReview extends Component {
  
  state={
    types: ["text","text","number","email","textArea"],
    ids: ["fname","lname","age","email","textarea","submit"],
    text: ["First Name: ","Last Name: ","Age: ","E-mail: ","Tell us about yourself: "],
    placeHolders: ["First name","Last name","Age","E-mail","Text here..."],
    values: ['','','','','']
  }
  
  updateFormInputs = (value,id) => {
    let arr = this.state.values;
    console.log(value);
    switch(id){
      case "fname":
        arr[0]=value;
        break;
      case "lname":
        arr[1]=value;
        break;
      case "age":
        arr[2]=value;
        break;
      case "email":
        arr[3]=value;
        break;
      case "text":
        arr[4]=value;
        break;
      default:
    }
    this.setState({values: arr})
  }

  submitHandler = (e) => {
    e.preventDefault();
    window.confirm("Press a button!");
  }

  renderForm = () => this.state.types.map((type,i) => {
    return(
      <Input 
      key={this.state.ids[i]}
      type={type}
      text={this.state.text[i]} 
      id={this.state.ids[i]}
      placeholder={this.state.placeHolders[i]}
      value={this.state.values[i]}
      sendInput={this.updateFormInputs} 
      />
    )
  })
  
  render() {
    return (
      <div className="form-review-container">
        <form className="review-form" action="" onSubmit={this.submitHandler}>
          {this.renderForm()}
          <input 
            className="form-input btn" 
            type="submit" 
            value="Submit"
            id={this.state.ids[5]}
          />
        </form>
      </div>
    )
  }
}
