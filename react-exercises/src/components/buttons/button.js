import React from 'react'

export default function button(props) {
  return (
    <div>
      <button className={props.className}>{props.value}</button>
    </div>
  )
}
