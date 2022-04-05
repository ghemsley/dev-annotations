import React from 'react'
import styles from './SkipLink.module.scss'

function SkipLink() {
  function handleClick(event) {
    event?.preventDefault()
    const mainHeader = document.getElementById('main-header')
    if (mainHeader) {
      mainHeader.tabIndex = -1
      mainHeader.focus()
      setTimeout(() => mainHeader.removeAttribute('tabindex'), 250)
      location.href = '/#main-header'
    }
  }
  return (
    <button className={styles.skipLink} type='button' onClick={handleClick}>
      Skip to main content
    </button>
  )
}

export default SkipLink
