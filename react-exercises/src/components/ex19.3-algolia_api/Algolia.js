import React, {useState, useEffect} from 'react';
import Search from './Search';
import axios from 'axios';
import './Algolia.css';

export default function Algolia() {
  let string = 'hooks';
  let path = `https://hn.algolia.com/api/v1/search?query=`;

  const [results,setResults] = useState([]);
  const [endpoint,setEndpoint] = useState(path + string);

  useEffect(() => {
    const search = async () => {
      try{
        const {data} = await axios.get(endpoint)
        setResults(data.hits);
      }catch(e){
        console.log(e);
      }
    }
    search();
  }, [endpoint])
  
  const renderLinks = arr => 
    Array.isArray(arr) && !arr.length ?
    <h2 className="animate">Loading</h2>
    : arr.map((e,i) => <li key={i.toString()}><a href={e.url}>{e.title}</a></li>)
  
  const setString = str => {
    string = str;
    setEndpoint(path + string)
  }

  return (
    <div className="algolia-container">
      <div className="box8">
        <Search sendInput={setString}/>
        <div className="links-list">
          {renderLinks(results)}
        </div>
      </div>
    </div>
  )
}
