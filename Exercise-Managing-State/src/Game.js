import React, { Component } from 'react';

class Game extends Component {
  constructor(props) {
    super(props);
    const valuesArray = this.makeNewQuestion();
    this.state = {
      value1: valuesArray[0],
      value2: valuesArray[1],
      value3: valuesArray[2],
      proposedAnswer: valuesArray[3],
      isProposedAnswerRight: valuesArray[4],
      numQuestions: 0,
      numCorrect: 0,
    }
  }

  makeNewQuestion = () => {
    const value1 = Math.floor(Math.random() * 100);
    const value2 = Math.floor(Math.random() * 100);
    const value3 = Math.floor(Math.random() * 100);
    const proposedAnswer = Math.floor(Math.random() * 3) + (value1 + value2 + value3);
    const isProposedAnswerRight = proposedAnswer === (value1 + value2 + value3) ? 'true' : 'false';

    return [value1, value2, value3, proposedAnswer, isProposedAnswerRight];
  }

  updateState = (newValuesArray, isUserAnswerCorrect) => {
    this.setState((prevState) => ({
      value1: newValuesArray[0],
      value2: newValuesArray[1],
      value3: newValuesArray[2],
      proposedAnswer: newValuesArray[3],
      isProposedAnswerRight: newValuesArray[4],
      numQuestions: prevState.numQuestions + 1,
      numCorrect: isUserAnswerCorrect === 'true' ? prevState.numCorrect + 1 : prevState.numCorrect,
    }));
  }

  handleAnswer = (event) => {
    const userAnswer = event.target.name; // get user answer from click event
    const isProposedAnswerRight = this.state.isProposedAnswerRight;
    const isUserAnswerCorrect = userAnswer === isProposedAnswerRight ? 'true' : 'false';
    const newValuesArray = this.makeNewQuestion();

    this.updateState(newValuesArray, isUserAnswerCorrect);
  }

  render() {
    const { value1, value2, value3, proposedAnswer, numQuestions, numCorrect } = this.state;
    return (
      <div>
        <div className="equation">
          <p className="text">{`${value1} + ${value2} + ${value3} = ${proposedAnswer}`}</p>
        </div>
        <button name="true" onClick={(event) => this.handleAnswer(event)}>True</button>
        <button name="false" onClick={(event) => this.handleAnswer(event)}>False</button>
        <p className="text">Your Score: {numCorrect}/{numQuestions}</p>
      </div>
    );
  }
}

export default Game;