import React, { Component } from 'react'
import styles from './Game.module.css'
import Answers from '../Answers'
import ColorCode from '../ColorCode'
import Score from '../Score'

class Game extends Component {
  render() {
    const {
      answers, correctAnswerIndex, score, selectedIndex, onClick,
    } = this.props

    return (
      <div className={styles.wrapper}>
        <Score score={score} />
        <div className={styles.centered}>
          <ColorCode answer={answers[correctAnswerIndex]} />
          <Answers answers={answers} selectedIndex={selectedIndex} onClick={onClick} />
        </div>
      </div>
    )
  }
}

export default Game
