import React from 'react'

export default function card(props) {
  return (
    <div className="card-container">
      <img className="image" src={props.src} alt="Avatar"></img>
      <div className="detail-container">
        <h4><b>{props.name}</b></h4>
        <p>{props.decription}</p>
      </div>
    </div>
  )
}
