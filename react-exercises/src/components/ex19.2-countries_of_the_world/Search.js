import React, {useState} from 'react';

export default function Search(props) {

  const [input,setInput] = useState('');
  
  const callback = () => {
    props.sendInput(input)
  }
  
  return (
    <div className="search-container">
      <label className="countries-label" htmlFor="countries-search">Search:</label>
      <input type="text" id="countries-search" onChange={(e) => setInput(e.target.value) }/>
      <button className="meaning-btn money glass countries-btn" onClick={callback()}>Search</button>
    </div>
  )
}
