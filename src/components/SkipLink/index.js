import React from 'react'
import styles from './SkipLink.module.scss'

function SkipLink() {
  return (
    <a className={styles.skipLink} href='#main'>
      Skip to main content
    </a>
  )
}

export default SkipLink
