import React from 'react'
import classNames from 'classnames/bind'
import styles from './Answers.module.css'

const cx = classNames.bind(styles)

const Answers = ({ answers, selectedIndex, onClick }) => (
  <ul className={styles.answers}>
    {answers.map(answer => (
      <li
        key={answer.key}
        className={cx('answer', { selected: selectedIndex === answer.key })}
        style={{ backgroundColor: answer.color }}
      >
        <button
          type="button"
          name={answer.key}
          className={cx('button', { selected: selectedIndex === answer.key })}
          onClick={onClick}
        />
      </li>
    ))}
  </ul>
)

export default Answers