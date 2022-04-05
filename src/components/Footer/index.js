import React from 'react'
import HelpIcon from '../HelpIcon'
import styles from './Footer.module.scss'

function Footer() {
  return (
    <footer className={styles.footer} role='none'>
      <hr aria-hidden={true} />
      <div>
        <p>
          Powered by <strong>Teladoc</strong>
          <span>© 2002-2022 Teladoc. All rights reserved.</span>
        </p>
        <div>
          <a href='/#'>{'Privacy & Legal Policies'}</a>
          <hr role='none' />
          <a href='/#'>
            <HelpIcon />
            Help
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
