import React, { Component } from 'react'

export default class TextArea extends Component {
  render() {
    return (
      <div className="text-area-container">
        <label for="free-text">Tell us about yourself:</label><br/>
        <textarea className="form-input" id="free-text" name="free-text" rows="5" placeholder="Text here..."/>
      </div>
    )
  }
}
