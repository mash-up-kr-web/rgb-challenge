import React from 'react'
import styles from './Heading.module.css'

const Heading = () => (
  <h1 className={styles.title}>
    The Great
    <em className={styles.emphasize}>RGB</em>
    Guessing Challenge
  </h1>
)

export default Heading
