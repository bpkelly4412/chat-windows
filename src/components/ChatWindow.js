import React, { Component } from 'react';
import Messages from './Messages';
import ChatInput from './ChatInput';
import '../css/App.css';
import '../css/bootstrap.min.css';
var moment = require('moment');

export default class ChatWindow extends Component{
// props are owner, toUser, messages, sendMessage(message), typing, isTyping
  constructor(props){
    super(props);
    this.createMessage = this.createMessage.bind(this);
    this.userIsTyping = this.userIsTyping.bind(this);
    this.userStoppedTyping = this.userStoppedTyping.bind(this);
  }
  //sends isTyping to App
  userIsTyping(){
    this.props.isTyping(this.props.owner, this.props.toUser, true);
  }
  userStoppedTyping(){
    this.props.isTyping(this.props.owner, this.props.toUser, false);
  }
  //adds information to message object that chatinput created, then calls App's sendMessage
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
          <Messages messages={this.props.messages} owner={this.props.owner} toUser={this.props.toUser}
            typing={this.props.typing}/>
          <ChatInput sendMessage={this.createMessage} userIsTyping={this.userIsTyping}
            userStoppedTyping={this.userStoppedTyping}/>
        </div>
    );
  }
}
