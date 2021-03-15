import React from 'react'

export default function button(props) {
  return (
    <div>
      <button onClick={() => props.toggle(!props.visible)}>Hide/Show</button>
    </div>
  )
}

