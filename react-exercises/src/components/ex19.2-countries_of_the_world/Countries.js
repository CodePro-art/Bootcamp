import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Search from './Search';
import './Countries.css';

export default function Countries() {

  const path = "https://restcountries.eu/rest/v2/all";

  const [results,setResults] = useState([]);
  const [data,setData] = useState([]);
  const [string,setStr] = useState('');

  useEffect(() => {
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

  useEffect(() => {
    setData(results.filter(e => e.name.toLowerCase().includes(string.toLowerCase())))
  }, [string,results])

  const renderList = arr => arr.map(e => <li key={e.alpha3Code}>{e.name}</li>)

  const setString = str => setStr(str)


  return (
    <div className="countries-container">
      <div className="box7">
        <Search sendInput={setString}/>
        <div className="countries-list">
          {renderList(data)}
        </div>
      </div>
    </div>
  )
}
