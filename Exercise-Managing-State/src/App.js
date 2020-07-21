import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Game from './Game';

class App extends Component {
/*   state = {
    value1: Math.floor(Math.random() * 100),
    value2: Math.floor(Math.random() * 100),
    value3: Math.floor(Math.random() * 100),
    get proposedAnswer() {
      return Math.floor(Math.random() * 3) + this.value1 + this.value2 + this.value3
    },
    numQuestions: 0,
    numCorrect: 0,
  } */

  trueOrFalse = (userResponse) => {
    const { value1, value2, value3, proposedAnswer } = this.state;

    const total = value1 + value2 + value3;
    const isProposedAnswerRight = proposedAnswer === total ? true : false;

    this.setState((prevState) => ({
      value1: Math.floor(Math.random() * 100),
      value2: Math.floor(Math.random() * 100),
      value3: Math.floor(Math.random() * 100),
      get proposedAnswer() {
        return Math.floor(Math.random() * 3) + this.value1 + this.value2 + this.value3
      },
      numQuestions: prevState.numQuestions + 1,
      numCorrect: userResponse === isProposedAnswerRight ? prevState.numCorrect + 1 : prevState.numCorrect,
    }));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="game">
          <h2>Mental Math</h2>
          <Game/>
        </div>
      </div>
    );
  }
}

export default App;
