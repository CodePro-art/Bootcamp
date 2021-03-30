import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Search from './Search';
import './Countries.css';

export default function Countries() {

  const path = "https://restcountries.eu/rest/v2/all";

  const [results,setResults] = useState([]);
  let string = '';

  useEffect(() => {
    console.log("ok");
    const search = async () => {
      try{
        const {data} = await axios.get(path)
        setResults(data);
      }catch(e){
        console.log(e);
      }
    }
    search();
  }, [])

  const renderList = arr => arr.filter(e => e.name.toLowerCase().includes(string.toLowerCase()))
  .map(e => <li key={e.alpha3Code}>{e.name}</li>)

  const filterCountries = str => string = str;

  return (
    <div className="countries-container">
      <div className="box7">
        <Search sendInput={filterCountries}/>
        <div className="countries-list">
          {renderList(results)}
        </div>
      </div>
    </div>
  )
}
