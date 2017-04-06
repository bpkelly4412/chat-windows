import React, { Component } from 'react';
import '../css/App.css';
import '../css/bootstrap.min.css';

export default class ChatInput extends Component{
  //props sendMessage(message), userIsTyping, userStoppedTyping
  constructor(props){
    super(props);
    this.state = { input: '' };
    this.changeInput = this.changeInput.bind(this);
    this.send = this.send.bind(this);
  }
  //change the state on each input, if the user just started typing (length=1) send isTyping
  //if the value is empty then user stopped typing
  changeInput(event){
    this.setState({input: event.target.value})
    if(event.target.value.length === 1){
      this.props.userIsTyping();
    }
    if(event.target.value === ''){
      this.props.userStoppedTyping();
    }
  }
  //when sent send the message and clear the input
  send(event){
    event.preventDefault();
    this.setState({ input: '' });
    this.props.sendMessage(this.state.input);
    this.props.userStoppedTyping()
  }

  render() {
    return (
      <div className="row">
        <form className="input-box" onSubmit={this.send}>
          <input type="text" placeholder="Type a message..." value={this.state.input}
            onChange={this.changeInput} required/>
        </form>
      </div>
    );
  }

}
