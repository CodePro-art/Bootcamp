import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export default class Header extends Component {
  render() {
    return (
      <nav className="router-nav">
        <h3 className="nav-links">
          <ul>
            <Link className="link" to="/">
              <li >Home</li>
            </Link>
            <Link className="link"to="/products">
              <li >Products</li>
            </Link>
          </ul>
        </h3>
      </nav>
    )
  }
}
