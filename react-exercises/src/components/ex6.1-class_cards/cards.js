import React, { Component } from 'react';
import Card from './Card';

export default class cards extends Component {
  render() {
    return (
      <div className="cards-class">
        <h1 className="cards-title">Cards: React Class Component</h1>
        <div className="cards-container">
          <Card name="Lugia" src="https://static.wikia.nocookie.net/mythical-and-legendary-pokemon/images/1/15/Lugia_by_aocom-daoe9wv.jpg/revision/latest?cb=20190303222357" decription="Type: Psychic/Flying"></Card>
          <Card name="Mew " src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxxJJnASj1nHf-3L8qhE9gTMM6ipuftnwmJA&usqp=CAU" decription="Type: Psychic"></Card>
          <Card name="Rayquaza" src="http://fc05.deviantart.net/fs70/f/2011/288/6/7/pokemon__rayquaza_by_mark331-d2x50dz.jpg" decription="Type: Dragon/Flying"></Card>
        </div>
      </div>
    )
  }
}
