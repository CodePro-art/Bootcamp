import axios from 'axios';
import React, {useState, useEffect} from 'react';
import './SimpleFetch.css'

export default function SimpleFetch() {
  const path = "https://swapi.dev/api/films/1/";

  const [results,setResults] = useState(null);
  const [title,setTitle] = useState('');
  const [director,setDirector] = useState('');

  useEffect(() => {
    const search = async () => {
      try{
        const {data} = await axios.get(path)
        setResults(data);
        setTitle(results ? results.title : 'loading')
        setDirector(results ? results.director : 'loading')
      }catch(e){
        console.log(e);
      }
    }
    search();
  }, [results])

  return (
    <div className="simple-fetch-container">
      <div className="box6">
        <h2 className="movie-title">Movie Title:</h2>
        <span className="starwars-data">
          {title}
        </span>
        <h2 className="movie-title">Movie Director:</h2>
        <span className="starwars-data">
          {director}
        </span>
      </div>
    </div>
  )
}
