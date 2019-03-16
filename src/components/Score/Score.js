import React from 'react'
import styles from './Score.module.css'

const Score = ({ score }) => {
  return (
    <div className={styles.wrapper}>
      SCORE: {score}   
    </div>
  )
}

export default Score