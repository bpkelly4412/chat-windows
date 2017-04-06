import React, { Component } from 'react';
import Message from './Message';
import '../css/App.css';
import '../css/bootstrap.min.css';
var moment = require('moment');
moment().format();

export default class Messages extends Component{
  //props messages, owner, toUser, typing
  constructor(props){
    super(props);
    this.state = {};
    this.isFirstInChain = this.isFirstInChain.bind(this);
    this.displayTime = this.displayTime.bind(this);
    this.fromMe = this.fromMe.bind(this);
  }

  componentDidUpdate() {
    // There is a new message in the state, scroll to bottom of list
    const objDiv = document.getElementById('messageList' + this.props.owner + this.props.toUser);
    objDiv.scrollTop = objDiv.scrollHeight;
  }

  //checks if message i is from a different user than the previous message
  //used as props in message to add styling
  isFirstInChain(i){
    if(i === 0){
      return true;
    }
    else if(this.props.messages[i].toUser === this.props.messages[i-1].toUser){
      return false;
    }
    else{
      return true;
    }
  }

  //checks if message is more than 10 minutes after the previous message, if it is display date
  //or if its the first message
  displayTime(i){
    if(i === 0){
      return true;
    }
    else if(this.props.messages[i].timestamp.diff(this.props.messages[i-1].timestamp, 'minutes') > 10){
      return true;
    }
    else{
      return false;
    }
  }

  //check to see if the message is from the owner of the chat window
  //if it is, style the message and hide the name
  fromMe(i){
    return (this.props.messages[i].fromUser === this.props.owner)
  }

  render() {
    const isTyping = this.props.typing ? 'typingInfo ' : 'hidden ';
    const messages = this.props.messages.map((message, i) => {
        return (
          <Message key={i} toUser={message.toUser} fromUser={message.fromUser}
            message={message.message} timestamp={message.timestamp} fromMe={this.fromMe(i)}
            firstInChain={this.isFirstInChain(i)} displayTime={this.displayTime(i)} />
        );
    });
    //give an id so it can scroll down to the bottom on new message
    //container for absolute positioning
    return(
      <div className="row messageContainer">
        <div className="messagesArea" id={"messageList"+this.props.owner+this.props.toUser}>
          {messages}
        </div>
        <div className={'col-md12 '+isTyping}>{this.props.toUser + ' is typing...'}</div>
      </div>
    );
  }
}
