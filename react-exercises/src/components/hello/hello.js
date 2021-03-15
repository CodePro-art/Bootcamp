import React from 'react'
import logo from './logo.svg'
import './Hello.css';

export default function hello() {
  return (
    <div>
       <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Click here!
        </a>
      </header>
    </div>
  )
}
