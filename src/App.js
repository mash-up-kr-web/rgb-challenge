import React, { Component } from 'react'
import { Dialog, Game, Heading } from './components'
import { createRGBCode, getIntLessThan } from './utils'
import styles from './App.module.css'

class App extends Component {
  state = {
    answers: [
      { key: 0, color: createRGBCode() },
      { key: 1, color: createRGBCode() },
      { key: 2, color: createRGBCode() },
    ],
    correctAnswerIndex: getIntLessThan(3),
    score: 0,
    selectedIndex: null,
  }

  selectAnswer = (event) => {
    const { correctAnswerIndex } = this.state
    const { name } = event.target

    if (Number(name) === correctAnswerIndex) {
      this.setState(state => ({
        score: state.score + 1,
        selectedIndex: Number(name),
      }))
    } else {
      this.setState({ selectedIndex: Number(name) })
    }
  }

  setNextStage = () => this.setState(state => ({
    answers: [
      { key: 0, color: createRGBCode() },
      { key: 1, color: createRGBCode() },
      { key: 2, color: createRGBCode() },
    ],
    correctAnswerIndex: getIntLessThan(3),
    selectedIndex: null,
  }))

  setInitialStage = () => this.setState({
    answers: [
      { key: 0, color: createRGBCode() },
      { key: 1, color: createRGBCode() },
      { key: 2, color: createRGBCode() },
    ],
    correctAnswerIndex: getIntLessThan(3),
    score: 0,
    selectedIndex: null,
  })

  render() {
    const { correctAnswerIndex, score, selectedIndex } = this.state

    return (
      <div className={styles.wrapper}>
        <Heading />
        <Game {...this.state} onClick={this.selectAnswer} />
        {selectedIndex !== null && (
          <Dialog
            correctAnswerIndex={correctAnswerIndex}
            score={score}
            selectedIndex={selectedIndex}
            setNextStage={this.setNextStage}
            setInitialStage={this.setInitialStage}
          />
        )}
      </div>
    )
  }
}

export default App
