import PropTypes from 'prop-types'
import React from 'react'
import styles from './Button.module.scss'

function Button({ children }) {
  return (
    <div>
      <button className={styles.button}>{children}</button>
    </div>
  )
}

Button.propTypes = {
  children: PropTypes.string
}

export default Button
