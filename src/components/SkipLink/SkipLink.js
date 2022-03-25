import React, { useState } from 'react'
import styles from './SkipLink.module.scss'

function SkipLink() {
  const [focused, setFocused] = useState(false)

  function handleFocus() {
    setFocused(true)
  }

  function handleBlur() {
    setFocused(false)
  }

  return (
    <a
      className={`${styles.skipLink}${focused ? ' ' + styles.focused : ''}`}
      onFocus={handleFocus}
      onBlur={handleBlur}
      href='/#main-header'>
      Skip to main content
    </a>
  )
}

export default SkipLink
