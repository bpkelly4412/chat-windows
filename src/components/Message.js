import React, { Component } from 'react';
import '../css/App.css';
import '../css/bootstrap.min.css';

export default class Message extends Component{
  constructor(props){
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div className="row">
        <div className="message received">{this.props.message}</div>
      </div>
    );
  }
}
