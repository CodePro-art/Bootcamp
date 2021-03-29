import React from 'react'
import Item from './Item'

export default function CheckList() {
  const checlist = ["one", "two", "three", "four", "five"];

  renderItems = arr => arr.map((e,i) => <Item key={i.toString()} content={e}/>);
  
  return (
    <div className="checklist-container">
      
    </div>
  )
}
