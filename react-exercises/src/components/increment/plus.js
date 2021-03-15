import React from 'react'

export default function plus(props) {
  return (
    <div>
      <button onClick={() => props.increaseCount(props.count + 1)}>+</button>
    </div>
  )
}
