import React from 'react'

export default function minus(props) {
  return (
    <div>
       <button className="minus" onClick={() => props.decreaseCount(props.count - 1)}>-</button>
    </div>
  )
}
