import React, { Component } from 'react';
import logo from '../logo.svg';
import '../css/App.css';
import '../css/bootstrap.min.css';
var moment = require('moment');
moment().format();
var a = moment('2016-01-01');
console.log(a)
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div className="container">
          <div className="row">
            <div className="col-md-8">col md 8</div>
            <div className="col-md-4">col md 4</div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
