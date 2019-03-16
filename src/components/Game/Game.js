import React, { Component } from 'react'
import styles from './Game.module.css'
import Score from '../Score'

class Game extends Component {
  state = { score: 0 }

  render() {
    const { score } = this.state

    return (
      <div className={styles.wrapper}>
        <Score score={score} />
      </div>
    )
  }
}

export default Game