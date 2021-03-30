import React, {useState} from 'react';

export default function Search(props) {

  const [input,setInput] = useState('');

  const callback = () =>{
    props.sendInput(input)
  }

  return (
    <div className="algolia-search-container">
      <label className="algolia-label" htmlFor="algolia-search">Search:</label>
      <input autoComplete="off" type="text" id="algolia-search" value={props.str} onChange={(e) => setInput(e.target.value) }/>
      <button className="meaning-btn animal glass algolia-btn" onClick={callback}>Search</button>
    </div>
  )
}
