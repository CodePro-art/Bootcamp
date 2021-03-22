import React, { Component } from 'react'
import './Focus.css'

export default class Focus extends Component {
  constructor(props) {
    super(props);

    this.inputRef = React.createRef();
  }

  componentDidMount () {
    this.inputRef.current.focus()
  }

  render() {
    return (
      <div className="focus-container">
        <form className="form">
          <label htmlFor="search" className="search-label">Search: </label>
          <input className="search-focus" ref={this.inputRef} type="text" id="search" placeholder="Search..." />
        </form>
      </div>
    )
  }
}
