import React, {useState} from 'react';
import Item from './Item'
import './CheckList.css'

export default function CheckList() {

  const checklist = ["one", "two", "three", "four", "five"];
  let display = ["block","block","block","block","block"];
  const [state,setStatus] = useState(display);

  // function to render each item in the checklist
  const renderItems = arr => arr.map((e,i) => 
    <i key={i.toString()} style={{display: state[i] }}>
      <Item content={e} id={i} sendData={updateDisplay}/>
    </i>);

  const updateDisplay =(disp,index) =>{
    console.log("in!");
    display[index] = disp ? "block" : "none";
    console.log(display);
  }

  const reset = () => {
    display = ["block","block","block","block","block"];
    setStatus(display)
  }

  return (
    <div className="checklist-container">
      <div className="box5">
        <div className="btn-container">
          <button className="reset-btn glass animal" onClick={()=> reset}>RESET</button>
          <button className="delete-btn glass celebrity" onClick={()=>setStatus(display)}>DELETE</button>
        </div>
        <ul>
          {renderItems(checklist)}
        </ul>
      </div>
    </div>
  )
}
