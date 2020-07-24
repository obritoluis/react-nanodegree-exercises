import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MessageList from './MessageList';
import SendMessage from './SendMessage';

class ChatWindow extends Component {
  render() {
    const { username, messages, onSendMessage } = this.props;

    return (
      <div className="chat-window">
        <h2>Super Awesome Chat</h2>
        <div className="name sender">{username}</div>
        <MessageList username={username} messages={messages} /> 
        <SendMessage username={username} onSendMessage={onSendMessage} />
      </div>
    );
  }
}

ChatWindow.propTypes = {
  username: PropTypes.string.isRequired,
  messages: PropTypes.array.isRequired,
  onSendMessage: PropTypes.func.isRequired,
}

export default ChatWindow;