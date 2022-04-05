import React from 'react'
import Logo from '../Logo/Logo'
import styles from './Header.module.scss'

function Header() {
  return (
    <header className={styles.header} role='none'>
      <a href='/#'>
        <Logo />
      </a>
    </header>
  )
}

export default Header
