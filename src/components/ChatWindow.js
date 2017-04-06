import React, { Component } from 'react';
import Messages from './Messages';
import ChatInput from './ChatInput';
import '../css/App.css';
import '../css/bootstrap.min.css';
var moment = require('moment');

export default class ChatWindow extends Component{

  constructor(props){
    super(props);
    this.createMessage = this.createMessage.bind(this);
  }

  createMessage(message){
    const messageObj = {
      toUser: this.props.toUser,
      fromUser: this.props.owner,
      timestamp: moment(),
      message
    };
    this.props.sendMessage(messageObj);
  }

  render() {
    return (
        <div className="col-md-4 col-md-offset-1 chat-box">
          {/*start header*/}
          <div className="row">
            <div className="col-md-12 chat-header">
              <p><span className="glyphicon glyphicon-comment"></span>{this.props.toUser}</p>
            </div>
          </div>
          {/*end header*/}
          <Messages messages={this.props.messages} owner={this.props.owner} fromUser={this.props.fromUser}/>
          <ChatInput sendMessage={this.createMessage}/>
        </div>
    );
  }
}
