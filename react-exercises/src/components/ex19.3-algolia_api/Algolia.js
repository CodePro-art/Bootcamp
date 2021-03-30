import React, {useState, useEffect} from 'react';
import Search from './Search';
import axios from 'axios';
import './Algolia.css';

export default function Algolia() {
  const path = `https://hn.algolia.com/api/v1/search?query={hooks}`;
  const [results,setResults] = useState([]);
  let string = '';

  useEffect(() => {
    const search = async () => {
      try{
        const {data} = await axios.get(path)
        setResults(data.hits);
      }catch(e){
        console.log(e);
      }
    }
    search();
  }, [results])
  
  const renderLinks = arr => arr.map((e,i) => <li key={i.toString()}><a href={e.url}>{e.title}</a></li>)

  return (
    <div className="algolia-container">
      <div className="box8">
        <Search sendInput={()=>{}}/>
        <div className="links-list">
          {renderLinks(results)}
        </div>
      </div>
      
    </div>
  )
}
