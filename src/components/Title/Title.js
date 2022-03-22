import React from 'react'
import styles from './Title.module.scss'
import strings from './strings.json'

function Title() {
  return <h1 className={styles.title}>{strings.title}</h1>
}

export default Title
