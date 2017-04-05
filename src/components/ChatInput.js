import React, { Component } from 'react';
import '../css/App.css';
import '../css/bootstrap.min.css';

export default class ChatInput extends Component{
  constructor(props){
    super(props);
    this.state = { input: '' };
    this.changeInput = this.changeInput.bind(this);
    this.send = this.send.bind(this);
  }

  changeInput(event){
    this.setState({input: event.target.value})
  }

  send(event){
    event.preventDefault();
    this.setState({ input: '' });
    this.props.sendMessage(this.state.input);
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
