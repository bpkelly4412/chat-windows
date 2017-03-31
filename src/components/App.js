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
                <div className="chat-header col-md-12">
                  <p><span className="glyphicon glyphicon-comment"></span>Username</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
