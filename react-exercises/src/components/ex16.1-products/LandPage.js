import React, { Component } from 'react'
import Header from './Header'
import HomePage from './Homepage'
import Products from './Products'
import {data} from './Store'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './Router.css'

export default class LandPage extends Component {

  state = {
    store: data
  }

  render() {
    console.log(this.state.store);
    return (
      <Router>
        <div className="router-container">
          <Header/>
          <Switch>
            <Route path="/" exact component={HomePage}/>
            <Route path="/products" exact component={Products}/>
          </Switch>
        </div>
       </Router> 
    )
  }
}
