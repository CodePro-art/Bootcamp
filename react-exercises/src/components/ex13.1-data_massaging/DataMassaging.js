import React, { Component } from 'react'
import {data} from './Data'
import Name from './Name'
import './DataMassaging.css'

export default class DataMassaging extends Component {

  state = {
    names: [],
    elders: [],
  }

  componentDidMount(){
    this.setState({
      names: this.getNames(data),
      elders: this.getElders(data)
    })
  }

  getNames = arr => arr.map( e => e.name)
  getElders = arr => arr.filter( e => e.birthday.slice(-4) < 1990)
  renderNames = arr => arr.map((e,i) => <Name key={i.toString()} name={e}/>)

  render() {

    return (
      <div className="data-massaging-container">
        {this.renderNames(this.state.names)}
      </div>
    )
  }
}
