import React, {useState} from 'react';
import Item from './Item';
import {data} from './Data';
import './CheckList.css';

export default function CheckList() {

  const [state,setStatus] = useState(data);

  // function to render each item in the checklist
  const renderItems = arr => arr.map(e => 
    <i key={e.id} onClick={()=>{updateState(e.id)}}>
      <Item content={e.content} check={e.check}/>
    </i>).filter((e)=> !e.check)

  const reset = () => {
    setStatus(data);
  }
  
  const reRender = () => {
    let filtered = state.filter(e=> !e.check);
    filtered.map((e,i) => e.id = i)
    setStatus(filtered);
  }

  const updateState = (index) => {
    let newState = state;
    newState[index].check = !state[index].check;
    setStatus(newState);
  }
  
  return (
    <div className="checklist-container">
      <div className="box5">
        <div className="btn-container">
          <button className="reset-btn glass animal" onClick={reset}>RESET</button>
          <button className="delete-btn glass celebrity" onClick={reRender}>DELETE</button>
        </div>
        <ul>
          {renderItems(state)}
        </ul>
      </div>
    </div>
  )
}
