import React, { Component } from 'react';
import axios from 'axios';
import Avatar from './Avatar';
import Input from './Input';
import './Avatars.css'

let path = `https://randomuser.me/api/?results=10`;
let list = [];
export default class Avaters extends Component {

  state = {
    people: [],
  }

  // upon mount
  async componentDidMount(){
    let people;
    try {
      const request = await axios.get(path)
      people = request.data.results;
    } catch (err) {
      console.log(err);
    }
    list = this.extractInfo(people);
    this.setState({people: list })
  }

  updateState = (string) => {
    console.log(string);
    // console.log(this.state.people);
    this.setState({people: list.filter(e => e.name.first.includes(string))})
  }

  extractInfo = arr => arr.map(e => {
    return {
      name: e.name, 
      picture: e.picture.large, 
      country: e.location.country, 
      phone: e.phone, 
      email: e.email,
    }
  })

  renderAvatars = arr => arr.map((e,i) => <Avatar key={i.toString()} data={e}/>)

  render() {
    return (
      <div className="avatars-container">
        <Input sendInput={this.updateState}/>
        {this.renderAvatars(this.state.people)}
      </div>
    )
  }
}
