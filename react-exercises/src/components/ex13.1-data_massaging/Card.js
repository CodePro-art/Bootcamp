import React, { Component } from 'react'

export default class Card extends Component {

  state = {
    meat: this.props.meat,
    fish: this.props.fish
  }

  renderLi = arr => arr.map((e,i) => <li key={i.toString()}>{e}</li>) 

  render() {
    return (
    <div className="card-container elder">
      <div className="detail-container-elder">
        <h3 className="elder-name"><b>{this.props.name}</b></h3>
        <h4 className="sub-title">Birthday:</h4>
        <p>{this.props.birthday}</p>
        <h4 className="sub-title">Favorite Food:</h4>
        <ul className="meat-list">
          {this.renderLi(this.state.meat)}
        </ul>
        <ul className="fish-list">
          {this.renderLi(this.state.fish)}
        </ul>
      </div>
    </div>
    )
  }
}
