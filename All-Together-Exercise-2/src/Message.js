import React from 'react';
import PropTypes from 'prop-types';

const Message = (props) => {
  const { username, message } = props;

  return (
    <li
      className={
        message.username === username ? 'message sender' : 'message recipient'
      }
    >
      <p>{`${message.username}: ${message.text}`}</p>
    </li>
  );
}

Message.propTypes = {
  username: PropTypes.string.isRequired,
  message: PropTypes.object.isRequired,
}

export default Message;