import React from 'react'

export default function card(props) {
  return (
    <div className="card-container">
      <img className="image" src={props.src} alt="Avatar"></img>
      <div class="detail-container">
        <h4><b>{props.name}</b></h4>
        <p>{props.decription}</p>
      </div>
    </div>
  )
}
