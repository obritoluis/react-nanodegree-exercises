import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    textToPrint: '',
  }

  handleTextChange = (value) => {
    this.setState({ textToPrint: value });
  }

  render() {
    const { textToPrint } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="container">
          <input
            type="text"
            placeholder="Say Something"
            value={textToPrint}
            onChange={(element) => this.handleTextChange(element.target.value)}
          />
          <p className="echo">Echo:</p>
          <p>{textToPrint}</p>
        </div>
      </div>
    );
  }
}

export default App;
