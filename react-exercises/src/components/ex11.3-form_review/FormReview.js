import React, { Component } from 'react'
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
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
      case "textarea":
        arr[4]=value;
        break;
      default:
    }
    this.setState({values: arr})
  }

  submitHandler = (e) => {
    e.preventDefault();
    confirmAlert({
      title: 'Confirm to submit',
      message: `
      First Name:        ${this.state.values[0]}
      Last Name:         ${this.state.values[1]}
      Age:                   ${this.state.values[2]}
      E-mail:                ${this.state.values[3]}
      About yourself:   ${this.state.values[4]}

      Are you sure to do this.`,
      buttons: [
        {
          label: 'Yes',
          onClick: () => alert('Click Yes')
        },
        {
          label: 'No',
          onClick: () => alert('Click No')
        }
      ]
    })
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
