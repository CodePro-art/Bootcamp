import React from 'react'

export default function card(props) {
  return (
    <div className="card-container chucky">
      <img className="image-norris" src={props.src} alt="Avatar"></img>
      <div className="detail-container-norris">
        <h3 className="chuck-name"><b>{props.name}</b></h3>
        <p>{props.decription}</p>
      </div>
    </div>
  )
}
