import React, { Component } from 'react';
import Card from './Card';

export default class cards extends Component {
  render() {
    return (
      <div className="cards-class">
        <h1 className="cards-title">Cards: React Class Component</h1>
        <div className="cards-container">
          
          <Card name="Lugia" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVXZb4q9vsiZm8FMnJbXkDSQzJ_WWu0GpXVQx_WgE0edAxqUx_l6uyvmdwnH9d7OYWa3k&usqp=CAU" decription="Type: Psychic/Flying"></Card>
          <Card name="Mew " src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxxJJnASj1nHf-3L8qhE9gTMM6ipuftnwmJA&usqp=CAU" decription="Type: Psychic"></Card>
          <Card name="Rayquaza" src="http://fc05.deviantart.net/fs70/f/2011/288/6/7/pokemon__rayquaza_by_mark331-d2x50dz.jpg" decription="Type: Dragon/Flying"></Card>
        </div>
      </div>
    )
  }
}
