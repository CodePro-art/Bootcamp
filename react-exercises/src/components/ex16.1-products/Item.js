import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {data} from './Store'

export default class Item extends Component {

  render() {
    let id = Number(this.props.match.params.id);
    let item = data.find(e => e.id === id);
   
    return (
      <div className="item-container">
        <div className="card-container shop-item">
          <div className="title container">
            <h2>{item.title}</h2>
          </div>
          <div className="image-container">
            <img className="item-image" src={item.imageUrl} alt="item"/>
          </div>
          <div className="price-container">
            {`price: ${item.price}`}
          </div>
          <div className="size-container">
            {`size: ${item.size}`}
          </div>
        </div>
        
        <Link to="/products">
          <button className="meaning-btn history glass item-button">Back</button>
        </Link>
      </div>
    )
  }
}
