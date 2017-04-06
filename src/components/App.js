import React, { Component } from 'react';
import ChatWindow from './ChatWindow';
import '../css/App.css';
import '../css/bootstrap.min.css';


//No props
class App extends Component {
  constructor(props){
    super(props);
    this.state = { messages: [], lauraTyping: false, robTyping: false };
    this.sendMessage = this.sendMessage.bind(this);
    this.isTyping = this.isTyping.bind(this);
  }
  //sends isTyping to chat windows by changing state
  isTyping(fromUser, toUser, bool){
    if(bool){
      if(toUser === 'Laura' && fromUser === 'Rob'){
        this.setState({ messages: this.state.messages, lauraTyping: this.state.lauraTyping, robTyping: true})
      }
      else{
        this.setState({ messages: this.state.messages, lauraTyping: true, robTyping: this.state.robTyping})
      }
    }
    else{
      if(toUser === 'Laura' && fromUser === 'Rob'){
        this.setState({ messages: this.state.messages, lauraTyping: this.state.lauraTyping, robTyping: false})
      }
      else{
        this.setState({ messages: this.state.messages, lauraTyping: false, robTyping: this.state.robTyping})
      }
    }

  }
  //sends message to both chat windows by changing the state
  sendMessage(message){
    const newMessages = this.state.messages;
    newMessages.push(message)
    this.setState({ messages: newMessages, lauraTyping: this.state.lauraTyping, robTyping: this.state.robTyping});
  }

  render() {
    return (
      <div className="App">
        <div className="container-fluid">
          <div className="row">
            <ChatWindow owner={'Laura'} toUser={'Rob'} messages={this.state.messages}
              sendMessage={this.sendMessage} typing={this.state.robTyping} isTyping={this.isTyping}/>
            <div className="col-md-1"><div className="row"></div></div>
            <ChatWindow owner={'Rob'} toUser={'Laura'} messages={this.state.messages}
               sendMessage={this.sendMessage} typing={this.state.lauraTyping} isTyping={this.isTyping}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
