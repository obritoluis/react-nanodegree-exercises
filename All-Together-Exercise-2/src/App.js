import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ChatWindow from './ChatWindow';

const users = [{ username: 'Amy' }, { username: 'John' }];

class App extends Component {
  state = {
    messages: [
      { username: 'Amy', text: 'Hi, Jon!' },
      { username: 'Amy', text: 'How are you?' },
      { username: 'John', text: 'Hi, Amy! Good, you?' },
    ],
  }

  handleSaveMessage = (message) => {
    this.setState((prevState) => ({
      messages: [...prevState.messages, message]
    }))
  }

  render() {
    const { messages } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="container">
          {users.map((user) => (
            <ChatWindow
              key={user.username}
              username={user.username}
              messages={messages}
              onSendMessage={this.handleSaveMessage}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
