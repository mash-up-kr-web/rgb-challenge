import React, { Component } from 'react'
import { Game, Heading } from './components'
import styles from './App.module.css'

class App extends Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <Heading />
        <Game />
      </div>
    )
  }
}

export default App
