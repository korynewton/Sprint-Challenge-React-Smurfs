import React, { Component } from 'react';
import axios from 'axios'
import { Route, NavLink } from 'react-router-dom'

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
componentDidMount() {
  axios.get('http://localhost:3333/smurfs')
    .then(res => {
      this.setState({
        smurfs: res.data
      })
    })
    .catch(err => {console.log(err)})
}


addToState = newList => {
  this.setState({
    smurfs : newList
  })
}

  render() {
    return (
      <div className="App">
        {/* <SmurfForm addToState={this.addToState} /> */}
        <div className="nav">
          <NavLink to="/">See the Village</NavLink>
          <NavLink to="/smurf-form">Add a smurf</NavLink>
        </div>
        <Route exact path='/smurf-form/' render={() => <SmurfForm addToState={this.addToState} />} />

        {/* <Smurfs smurfs={this.state.smurfs} /> */}
        <Route exact path='/' render={() => <Smurfs smurfs={this.state.smurfs} />} />
      </div>
    );
  }
}

export default App;
