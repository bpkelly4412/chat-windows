import React, { Component } from 'react';
import Message from './Message';
import '../css/App.css';
import '../css/bootstrap.min.css';

export default class Messages extends Component{
  constructor(props){
    super(props);
    this.state = {};
  }

  render() {
    const messages = this.props.messages.map((message, i) => {
      //check to see if its the message is different from a different user than the previous one
      if(message.fromUser === this.props.owner){
        return (
          <Message key={i} toUser={message.toUser} fromUser={message.fromUser} message={message.message} fromMe={true} />
        );
      }else{
        return (
          <Message key={i} toUser={message.toUser} fromUser={message.fromUser} message={message.message} fromMe={false} />
        );
      }
    });
    return(
      <div className="messages">
        {messages}
      </div>
    );
  }
}
