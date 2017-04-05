import React, { Component } from 'react';
import '../css/App.css';
import '../css/bootstrap.min.css';

export default class Message extends Component{
  constructor(props){
    super(props);
    this.state = {}
  }

  render() {
    const sentOrReceived = this.props.fromMe ? 'message sent' : 'message received';
    return (
      <div className="row">
        <div className={sentOrReceived}>{this.props.message}</div>
      </div>
    );
  }
}
