import React from 'react'
import styles from './Title.module.scss'

function Title() {
  return (
    <h1 id='main-header' className={styles.title}>
      {"It's time to check in"}
    </h1>
  )
}

export default Title
