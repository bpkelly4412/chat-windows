import React, { Component } from 'react';
import ChatWindow from './ChatWindow';
import '../css/App.css';
import '../css/bootstrap.min.css';
var moment = require('moment');
moment().format();
//var a = moment('2016-01-01');
//console.log(a)

//No props
class App extends Component {
  constructor(props){
    super(props);
    this.state = { messages: [] };
    this.sendMessage = this.sendMessage.bind(this);
  }

  //sends message to both chat windows by changing the state
  sendMessage(message){
    const messages = this.state.messages;
    messages.push(message)
    this.setState({ messages });
  }

  render() {
    return (
      <div className="App">
        <div className="container-fluid">
          <div className="row">
            <ChatWindow owner={'Laura'} toUser={'Rob'} messages={this.state.messages} sendMessage={this.sendMessage}/>
            <div className="col-md-1"><div className="row"></div></div>
            <ChatWindow owner={'Rob'} toUser={'Laura'} messages={this.state.messages} sendMessage={this.sendMessage}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
