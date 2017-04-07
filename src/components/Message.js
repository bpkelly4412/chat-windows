import React, { Component } from 'react';
import '../css/App.css';
import '../css/bootstrap.min.css';
var moment = require('moment');
moment().format();

export default class Message extends Component{
  //props key, toUser, fromUser, message, fromMe, displayTime

  render() {
    //create classNames based on the props given by Messages
    const sentOrReceived = this.props.fromMe ? 'sent ' : 'received ';
    const firstInChain = this.props.firstInChain ? 'firstInChain ' : 'notFirstInChain ';
    const displayTime = this.props.displayTime ? 'show ' : 'hidden ';
    return (
      <div className="messageContents">
        <div className="row">
          <div className="col-md-12">
            <div className={'timeHeader ' + displayTime}>{this.props.timestamp.calendar()}</div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className={'name ' + firstInChain + sentOrReceived}> {this.props.fromUser} </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className={'message ' + sentOrReceived + firstInChain}>
              {this.props.message}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
