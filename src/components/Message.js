import React, { Component } from 'react';
import '../css/App.css';
import '../css/bootstrap.min.css';

export default class Message extends Component{
  constructor(props){
    super(props);
    this.state = {}
  }

  render() {
    const sentOrReceived = this.props.fromMe ? 'sent ' : 'received ';
    const first = this.props.first ? 'first ' : 'notFirst ';
    return (
      <div>
        <div className="row">
          <div className={'name ' + first + sentOrReceived}> {this.props.fromUser} </div>
        </div>
        <div className="row">
          <div className={'message ' + sentOrReceived + first}>
            {this.props.message}
          </div>
        </div>
    </div>
    );
  }
}
