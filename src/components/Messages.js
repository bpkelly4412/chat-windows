import React, { Component } from 'react';
import Message from './Message';
import '../css/App.css';
import '../css/bootstrap.min.css';

export default class Messages extends Component{
  constructor(props){
    super(props);
    this.state = {};
    this.isFirstInChain = this.isFirstInChain.bind(this);
    this.isLastMessage = this.isLastMessage.bind(this);
    this.fromMe = this.fromMe.bind(this);
  }

  componentDidUpdate() {
    // There is a new message in the state, scroll to bottom of list
    const objDiv = document.getElementById('messageList' + this.props.owner);
    objDiv.scrollTop = objDiv.scrollHeight;
  }

  //checks if message i is from a different user than the previous message
  isFirstInChain(i){
    if(i === 0){
      return true;
    }
    else if(this.props.messages[i].toUser === this.props.messages[i-1].toUser){
      return false;
    }
    else{
      console.log('true');
      return true;
    }
  }


  isLastMessage(i){
    return(i === this.props.messages.length-1)
  }

  fromMe(i){
    return (this.props.messages[i].fromUser === this.props.owner)
  }

  render() {
    const messages = this.props.messages.map((message, i) => {
      //check to see if its the message is different from a different user than the previous one
        return (
          <Message key={i} toUser={message.toUser} fromUser={message.fromUser}
            message={message.message} fromMe={this.fromMe(i)}
            first={this.isFirstInChain(i)} last={this.isLastMessage(i)} />
        );
    });
    return(
      <div className="row">
        <div className="messagesArea" id={"messageList"+this.props.owner}>
          {messages}
        </div>
      </div>
    );
  }
}
