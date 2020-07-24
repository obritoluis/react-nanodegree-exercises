import React from 'react';
import PropTypes from 'prop-types';
import Message from './Message';

const MessageList = (props) => {
  const { username, messages } = props;

  return (
    <ul className="message-list">
      {messages.map((message, index) => (
        <Message
          key={index}
          username={username}
          message={message}
        />
      ))}
    </ul>
  );

}

MessageList.propTypes = {
  username: PropTypes.string.isRequired,
  messages: PropTypes.array.isRequired,
}

export default MessageList;