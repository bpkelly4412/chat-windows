import React, { Component } from 'react';
import '../css/App.css';
import '../css/bootstrap.min.css';
var moment = require('moment');
moment().format();
//var a = moment('2016-01-01');
//console.log(a)
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-5 chat-box">
              <div className="row">
                <div className="col-md-12 chat-header">
                  <p><span className="glyphicon glyphicon-comment"></span>Username</p>
                </div>
              </div>
              <div className="row">
                <div className="message received"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec maximus fermentum ante. Suspendisse nec libero vehicula, ultricies ligula a, luctus mi. Morbi dictum lobortis ipsum. In aliquet mauris libero, at tempor libero suscipit nec. Nam neque lorem, placerat bibendum justo nec, pretium lacinia mauris. Quisque porta tincidunt libero nec rutrum.</p></div>
              </div>
              <div className="row">
                <div className="message sent pull-right"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec maximus fermentum ante. Suspendisse nec libero vehicula, ultricies ligula a, luctus mi. Morbi dictum lobortis ipsum. In aliquet mauris libero, at tempor libero suscipit nec. Nam neque lorem, placerat bibendum justo nec, pretium lacinia mauris. Quisque porta tincidunt libero nec rutrum.</p></div>
              </div>
              <div className="row">
                <div className="message sent pull-right"><p>Lorem ipsum</p></div>
              </div>
              <div className="row">
                <div className="message sent pull-right"><p>Lorem ipsum</p></div>
              </div>
              <div className="row">
                <div className="message received "><p>Lorem ipsum</p></div>
              </div>
              <div className="row">
                <div className="message received"><p>Lorem ipsum</p></div>
              </div>
              <div className="row">
                <form className="input-box">
                  <input type="text" placeholder="Type a message..." required/>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
