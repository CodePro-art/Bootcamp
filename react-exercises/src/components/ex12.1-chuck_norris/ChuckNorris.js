import React, { Component } from 'react'
import Card from './Card';
import axios from 'axios';
import './Chuck.css';

// Retrieve a random chuck joke in JSON format.
const path = `https://api.chucknorris.io/jokes/random`

// Retrieve a random chuck norris joke from a given category.
// const jokeFromCategory = `https://api.chucknorris.io/jokes/random?category={category}`

// Retrieve a list of available categories.
const categoryList  = `https://api.chucknorris.io/jokes/categories`

// Free text search.
// const freeTextSearch = `https://api.chucknorris.io/jokes/search?query={query}`

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
      this.setState({joke: request.data.value,categories: request2.data})
    } catch (err) {
      console.log(err);
    }
  }
  
  getJoke = async (endpoint) => {
    try {
      const request = await axios.get(endpoint)
      this.setState({joke: request.data.value})
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    const buttons = this.state.categories.map((c,i) => <button key={i.toString()} className={`glass `+ c} onClick={()=>{}}>{c.toUpperCase()}</button>)
    return (
      <div className="jokes-container">
        <h1 className="norris-header">CATEGORY: {this.state.current}</h1>
        <Card name="chucky" src="https://www.pngkit.com/png/full/110-1105172_chuck-norris-chuck-norris-cartoon-pics-transparent.png" decription={this.state.joke}/>
        <div className="buttons-chuck-container">
          <button className={"glass random"} onClick={()=>{}}>RANDOM</button>
          {buttons}
        </div>
      </div>
    )
  }
}

