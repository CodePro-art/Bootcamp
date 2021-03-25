import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import React, { Component } from 'react'
import HomePage from './Homepage'
import Products from './Products'
import Header from './Header'
import Item from './Item'
import './Router.css'

export default class LandPage extends Component {

  render() {
    return (
      <Router>
        <div className="router-container">
          <Header/>
          <Switch>
            <Route path="/" exact component={HomePage}/>
            <Route path="/products" exact component={Products}/>
            <Route path="/products/:id" exact component={Item}/>
          </Switch>
        </div>
       </Router> 
    )
  }
}
