import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {data} from './Store'

export default class Products extends Component {
 
  renderList = arr => arr.map(e => <Link to={`/products/${e.id}`} key={e.id}><li>{e.title}</li></Link>)

  render() {
    return (
      <div className="Products-container nav-links">
        <h1 className="shop-title">Products Page</h1>
        <ul className="item-list">
          {this.renderList(data)}
        </ul>
      </div>
    )
  }
}
