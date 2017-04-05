import React, { Component } from 'react';
import Message from './Message';
import '../css/App.css';
import '../css/bootstrap.min.css';

export default class Messages extends Component{
  constructor(props){
    super(props);
    this.state = {};
    this.isFirstInChain = this.isFirstInChain.bind(this);
    this.isLastInChain = this.isLastInChain.bind(this);
    this.fromMe = this.fromMe.bind(this);
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


  showName(i){
    return (this.isFirstInChain(i) && !this.fromMe(i))
  }

  isLastInChain(i){
    if(this.props.messages[i+1] === undefined){
      return true;
    }
    else if(this.props.messages[i].toUser !== this.props.messages[i+1].toUser){
      return true;
    }
    else{
      return false;
    }
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
            first={this.isFirstInChain(i)} last={this.isLastInChain(i)} />
        );
    });
    return(
      <div className="messages">
        {messages}
      </div>
    );
  }
}
