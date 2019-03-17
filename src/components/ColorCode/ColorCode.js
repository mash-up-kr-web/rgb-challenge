import React from 'react'
import styles from './ColorCode.module.css'

const ColorCode = ({ answer }) => (
  <p className={styles.answer}>{answer.color}</p>
)

export default ColorCode
