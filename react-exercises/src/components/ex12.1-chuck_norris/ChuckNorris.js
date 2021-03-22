import React, { Component } from 'react';
import Card from './Card';
import axios from 'axios';
import './Chuck.css';

// Retrieve a random chuck joke in JSON format.
const path = `https://api.chucknorris.io/jokes/random`;

// Retrieve a list of available categories.
const categoryList  = `https://api.chucknorris.io/jokes/categories`;

export default class ChuckNorris extends Component {
  state = {
    categories: [],
    current: '',
    joke: '',
  }

  // upon mount
  async componentDidMount(){
    try {
      const request = await axios.get(path)
      const request2 = await axios.get(categoryList)
      this.setState({joke: request.data.value, categories: request2.data})
    } catch (err) {
      console.log(err);
    }
  }
  
  getJoke = async (category) => {
    let endpoint = category ? path+`?category=${category}` : path;
    try {
      const request = await axios.get(endpoint);
      return request.data.value;
    } catch (err) {
      console.log(err);
    }
  }
  

  render() {
    const buttons = this.state.categories.map((c,i) => {
      return <button 
        key={i.toString()} 
        className={`glass `+ c} 
        value={c} 
        onClick={ async (e)=>{
          this.setState({current: e.target.value, joke: await this.getJoke(c)})    
          }}>{c.toUpperCase()}
      </button>
    })

    return (
      <div className="jokes-container">
        <h1 className="norris-header">CATEGORY: {this.state.current}</h1>
        <Card name="chucky" src="https://www.pngkit.com/png/full/110-1105172_chuck-norris-chuck-norris-cartoon-pics-transparent.png" decription={this.state.joke}/>
        <div className="buttons-chuck-container">
          <button className={"glass random"} value="" onClick={ async (e)=>{
            this.setState({current: e.target.value, joke: await this.getJoke(this.state.current)})
            
            }}>RANDOM</button>
          {buttons}
        </div>
      </div>
    )
  }
}

