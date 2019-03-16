import React, { Component } from 'react'
import styles from './Game.module.css'
import Answers from '../Answers'
import ColorCode from '../ColorCode'
import Score from '../Score'
import { createRGBCode, getIntLessThan } from '../../utils'

class Game extends Component {
  state = {
    answers: [createRGBCode(), createRGBCode(), createRGBCode()],
    correctAnswerIndex: getIntLessThan(3),
    score: 0,
    selectedIndex: null,
  }

  handleClick = (event) => {
    const { correctAnswerIndex } = this.state
    const { name } = event.target

    if (Number(name) === correctAnswerIndex) {
      this.setState(state => ({
        score: state.score + 1,
        selectedIndex: Number(name),
      }))
    } else {
      this.setState({
        selectedIndex: Number(name),
      })
    }
  }

  render() {
    const {
      answers, correctAnswerIndex, score, selectedIndex,
  } = this.state

    return (
      <div className={styles.wrapper}>
        <Score score={score} />
        <div className={styles.centered}>
          <ColorCode answer={answers[correctAnswerIndex]} />
          <Answers answers={answers} selectedIndex={selectedIndex} onClick={this.handleClick} />
        </div>
      </div>
    )
  }
}

export default Game
