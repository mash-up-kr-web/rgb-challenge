import React from 'react'
import styles from './Game.module.css'
import Answers from '../Answers'
import ColorCode from '../ColorCode'
import Score from '../Score'

const Game = ({
  answers, correctAnswerIndex, score, selectedIndex, onClick,
}) => (
  <div className={styles.wrapper}>
    <Score score={score} />
    <div className={styles.centered}>
      <ColorCode answer={answers[correctAnswerIndex]} />
      <Answers answers={answers} selectedIndex={selectedIndex} onClick={onClick} />
    </div>
  </div>
)

export default Game
