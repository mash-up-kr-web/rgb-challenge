import React from 'react'
import classNames from 'classnames/bind'
import styles from './Answers.module.css'

const cx = classNames.bind(styles)

const Answers = ({ answers, selectedIndex, onClick }) => (
  <ul className={styles.answers}>
    {answers.map((answer, index) => (
      <li
        key={answer}
        className={cx('answer', { selected: selectedIndex === index })}
        style={{ backgroundColor: answer }}
      >
        <button
          type="button"
          name={index}
          className={cx('button', { selected: selectedIndex === index })}
          onClick={onClick}
        />
      </li>
    ))}
  </ul>
)

export default Answers