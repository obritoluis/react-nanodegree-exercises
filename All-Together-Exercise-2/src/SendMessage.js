import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SendMessage extends Component {
  state = {
    text: '',
  }

 /**
  * If the user did not type anything, he/she should not be
  * allowed to submit.
  */
  isDisabled = () => {
    const { text } = this.state;
    return text === '';
  };

  handleInputText = (event) => {
    const { value } = event.target;
    this.setState({text: value})
  }

  sendMessage = (event) => {
    event.preventDefault();
    
    const { onSendMessage, username } = this.props;
    const { text } = this.state;
    const message = {
      username: username,
      text: text
    }

    onSendMessage(message);
  }

  render() {
    const { text } = this.state;

    return (
      <form className="input-group" onSubmit={this.sendMessage}>
        <input
          type="text"
          className="form-control"
          placeholder="Enter your message..."
          value={text}
          onChange={this.handleInputText}
        />
        <div className="input-group-append">
          <button className="btn submit-button" disabled={this.isDisabled()}>
            SEND
          </button>
        </div>
      </form>
    );
  }
}

SendMessage.propTypes = {
  username: PropTypes.string.isRequired,
  onSendMessage: PropTypes.func.isRequired,
}

export default SendMessage;