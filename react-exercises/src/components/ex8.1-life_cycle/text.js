import React from 'react'

export default function text(props) {
  return (
    <div>
      <h1 className="favorite-text">{props.text} favorite color is {props.fav}</h1>
    </div>
  )
}
