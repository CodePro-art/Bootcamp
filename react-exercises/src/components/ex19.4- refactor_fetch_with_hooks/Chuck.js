import React, {useState, useEffect} from 'react';
import Card from './Card';
import axios from 'axios';

export default function Chuck() {

  // Retrieve a random chuck joke in JSON format.
  const path = `https://api.chucknorris.io/jokes/random`;

  const [categories,setCategories] = useState([]);
  const [current,setCurrent] = useState('');
  const [joke,setJoke] = useState('');

  // onMount replacement
  useEffect(() => {
    const search = async () => {
      try{
        const request= await axios.get(`https://api.chucknorris.io/jokes/random`)
        const request2 = await axios.get(`https://api.chucknorris.io/jokes/categories`)
        setJoke(request.data.value);
        setCategories(request2.data);
      }catch(e){
        console.log(e);
      }
    }
    search();
  }, [])
  
  useEffect(() => {
     
  }, [])

  const getJoke = async category => {
    let endpoint = category ? path+`?category=${category}` : path;
    try {
      const request = await axios.get(endpoint);
      return request.data.value;
    } catch (err) {
      console.log(err);
    }
  }

  const renderButtons = () => categories.map((c,i) => 
      <button 
        key={i.toString()} 
        className={`glass `+ c} 
        value={c} 
        onClick={ async (e)=>{
          setJoke(await getJoke(c));
          setCurrent(e.target.value);   
      }}>
        {c.toUpperCase()}
      </button>
    )

  return (
    <div className="jokes-container">
      <h1 className="norris-header">CATEGORY: {current}</h1>
      <Card name="chucky" src="https://www.pngkit.com/png/full/110-1105172_chuck-norris-chuck-norris-cartoon-pics-transparent.png" decription={joke}/>
      <div className="buttons-chuck-container">
        <button className={"glass random"} value="" 
          onClick={ async (e)=>{
          setCurrent(e.target.value);
          setJoke(await getJoke(current));
        }}>
          RANDOM
        </button>
        {renderButtons()}
      </div>
    </div>
  )
}
