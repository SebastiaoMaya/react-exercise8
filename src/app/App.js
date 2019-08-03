import React, { Component } from 'react';
import Chat from '../components/chat/Chat';
import './App.css';
import logo from './logo.svg';

/*
This exercise will help you practice many of your newly aquired React skills.

The instructions are included in the `instructions.md` file.
*/

class App extends Component {
  state = {
    users: [{ username: 'Amy' }, { username: 'John' }],
    messages: [
      { username: 'Amy', text: 'Hi, Jon!' },
      { username: 'Amy', text: 'How are you?' },
      { username: 'John', text: 'Hi, Amy! Good, you?' }
    ]
  };

  addMessage = message => {
    this.setState(currentState => {
      currentState.messages.push(message);
      return { messages: currentState.messages };
    });
  };

  render() {
    const { users, messages } = this.state;

    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h1 className='App-title'>ReactND - Coding Practice</h1>
        </header>
        <div className='container'>
          <Chat
            user={users[0]}
            messages={messages}
            addMsgFunc={this.addMessage}
          />
          <Chat
            user={users[1]}
            messages={messages}
            addMsgFunc={this.addMessage}
          />
        </div>
      </div>
    );
  }
}

export default App;
