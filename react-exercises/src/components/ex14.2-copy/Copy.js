import React, { Component } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Copy.css'

export default class Copy extends Component {

  constructor(props) {
    super(props);

    this.inputRef = React.createRef();
  }

  notify = (string) => toast.dark(string, {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
  
  render() {
    
    return (
      <div className="copy-cobtainer">
        <div className="block-container">
          <h1 className="meaning-title">What is the meanning of life?</h1>
          <textarea className="textarea-meaning" name="meaningOfLife" id="" cols="30" rows="5" ref={this.inputRef}></textarea>
          <button className="meaning-btn science glass" onClick={()=>this.notify(this.inputRef.current.value)}>Copy</button>
          <ToastContainer position="top-center"/>
        </div>
      </div>
    )
  }
}
