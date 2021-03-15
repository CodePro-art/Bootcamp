import React from 'react'

export default function minus(props) {
  return (
    <div>
       <button onClick={() => props.decreaseCount(props.count - 1)}>-</button>
    </div>
  )
}
